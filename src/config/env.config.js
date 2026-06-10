import 'dotenv/config'

const REQUIRED_VARS = ['PORT', 'NODE_ENV']

for (const varName of REQUIRED_VARS) {
  if (!process.env[varName]) {
    console.error(`Error: falta la variable de entorno ${varName}`)
    process.exit(1) // mata el proceso con código de error
  }
}

export const PORT = process.env.PORT
export const NODE_ENV = process.env.NODE_ENV