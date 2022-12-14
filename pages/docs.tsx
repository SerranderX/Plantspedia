import { Grid } from '@ui/Grid'
import { Button } from '@ui/Button'
import { Typography } from '@ui/Typography'
import { Layout } from '@components/Layout'

export default function Home() {
  return (
    <Layout>
      <Typography variant="h2" className="text-center">
        馃憢 Curso de Next.js
      </Typography>
      <div className="max-w-5xl mx-auto my-10">
        <Grid component="ul" container spacing={2}>
          {documentationList.map((doc) => (
            <Grid component="li" item className="" xs={6}>
              <a
                href={doc.link}
                target="_blank"
                title={doc.title}
                className="p-4 border-2 border-gray-300 block hover:border-green-500 transition duration-500 transition-colors"
              >
                <Typography variant="h5" className="mb-2">
                  {doc.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {doc.description}
                </Typography>
              </a>
            </Grid>
          ))}
        </Grid>
      </div>
      <footer className="text-center">
        <Button
          variant="outlined"
          color="primary"
          href="https://platzi.com/cursos/next-avanzado/"
        >
          馃殌 Ir al curso
        </Button>
      </footer>
    </Layout>
  )
}

const documentationList = [
  {
    title: 'Documentaci贸n Proyecto',
    description:
      '驴Tienes dudas sobre este proyecto? Aqu铆 encuentras la documentaci贸n para configurar todo. As茅gurate de leerlo.',
    link: 'https://github.com/jonalvarezz/platzi-nextjs-saga',
  },
  {
    title: 'Documentaci贸n Next.js',
    description:
      'Aqu铆 encuentras la documentaci贸n sobre el framework base con el que realizaremos todo.',
    link: 'https://nextjs.org/docs/getting-started',
  },
  {
    title: 'Documentaci贸n Contentful',
    description:
      'Nuestra aplicaci贸n conecta a Contenful para leer todo el contenido que mostraremos. Contenful provee la capa de GraphQL.',
    link: 'https://www.contentful.com/developers/docs/references/content-delivery-api/',
  },
  {
    title: 'Curso de Next.js B谩sico',
    description:
      '驴Olvidates algo sobre Next.js? En el curso b谩sico puedes refrescar tu memoria y aprender los fundamentos.',
    link: 'https://platzi.com/cursos/next/',
  },
]
