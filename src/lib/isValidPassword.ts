export async function isValidPassword(
  password: string,
  hashedPassword: string
) {
  console.log(await hashPassword(password));
  console.log(hashedPassword);
  return (await hashPassword(password)) === hashedPassword;
}

async function hashPassword(password: string) {
  const arrayBuffer = await crypto.subtle.digest(
    "SHA-512",
    new TextEncoder().encode(password)
  );

  return Buffer.from(arrayBuffer).toString("base64");
}
