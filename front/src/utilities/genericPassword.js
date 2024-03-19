function genericPassword() {
  const caracteres =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let contraseña = ''
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * caracteres.length)
    contraseña += caracteres[randomIndex]
  }
  return contraseña
}

export { genericPassword }
