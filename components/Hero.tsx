import Link from 'next/link'
import { Typography } from '@ui/Typography'
import { ImageContentfull } from './ImageContentfull'

type HeroProps = Plant & { className?: string }

export function Hero({ plantName, slug, image, className }: HeroProps) {
  return (
    <div className={className}>
      <div className="relative text-center">
        <Link href={`/entry/${slug}`}>
          <a title={`Go to ${plantName}`} className="text-center">
            <div className="text-container text-center flex">
              <Typography
                variant="h1"
                component="h2"
                className="break-words text-3xl md:text-5xl sm:text-6xl"
              >
                {plantName}
              </Typography>
            </div>
            <div className="opacity-50 hover:opacity-70 inline-block">
              <ImageContentfull src={image.url} layout="intrinsic" width={900} className="rounded-lg shadow-xl" aspectRatio='16:9' fit="fill" />
            </div>
          </a>
        </Link>
      </div>

      <style jsx>{`
        .text-container {
          top: 45%;
          transform: translateY(-50%);
          max-width: 900px;
          position: absolute;
          display: flex;
          z-index: 2;
          left: 15%;
          right: 15%;
        }

        @media screen and (min-width: 600px) {
          .text-container {
            max-width: 800px;
          }
        }

        @media screen and (min-width: 1300px) {
          .text-container {
            max-width: 800px;
            left: 25%;
            right: 25%;
          }
        }
      `}</style>
    </div>
  )
}
