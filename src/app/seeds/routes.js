import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function initializeDatabase() {
  const client = await pool.connect(); // Faltaba el await aquí

  try {
    // Iniciar una transacción
    await client.query("BEGIN");

    // Crear tabla de usuarios
    await client.query(`
      CREATE TABLE IF NOT EXISTS usuarios (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(100) NOT NULL,
        correo VARCHAR(100) UNIQUE NOT NULL,
        contrasena VARCHAR(255) NOT NULL,
        fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        ultimo_login TIMESTAMP
      )
    `);

    // Crear tabla de quiz_completados
    await client.query(`
      CREATE TABLE IF NOT EXISTS quiz_completados (
        id SERIAL PRIMARY KEY,
        usuario_id INT REFERENCES usuarios(id) ON DELETE CASCADE,
        quiz_name VARCHAR(100) NOT NULL,
        puntaje_total INT,
        fecha_completado TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Confirmar la transacción
    await client.query("COMMIT");

    return {
      success: true,
      message: "Tablas creadas exitosamente en la base de datos",
    };
  } catch (error) {
    // Revertir la transacción en caso de error
    await client.query("ROLLBACK").catch(rollbackError => {
      console.error("Error al hacer ROLLBACK:", rollbackError);
    });
    
    console.error("Error al crear las tablas:", error);
    return {
      success: false,
      message: `Error al crear las tablas: ${error instanceof Error ? error.message : String(error)}`,
    };
  } finally {
    // Liberar el cliente de vuelta al pool
    client.release();
  }
}