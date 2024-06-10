// @ts-check
import { test, expect } from '@playwright/test'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
const LOCALHOST_URL = 'http://localhost:5173/'

test('App muestra hehco aleatorio e imagen', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  // Seleccionar el botón por su ID y simular hacer clic en él
  await page.locator('#newQuote').click()

  // Esperar a que el párrafo y la imagen estén presentes en el DOM
  const text = await page.locator('p')
  const image = await page.locator('img')

  // Obtener el contenido de texto del párrafo y el atributo src de la imagen
  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  // Mostrar los valores en la consola para depuración
  console.log({ textContent, imageSrc });

  // Verificar que el contenido de texto no esté vacío
  await expect(textContent?.length).toBeGreaterThan(0)

  // Verificar que el src de la imagen comience con el prefijo esperado
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
})