import Link from 'next/link'
import { Typography } from '@ui/Typography'
import { ImageContentfull } from './ImageContentfull'

type HeroProps = Plant & { className?: string }

export function Hero({ plantName, slug, image, className }: HeroProps) {
  return (
    <div className={className}>
      <div className="relative text-center">
        <Link href={`/entry/${slug}`}>
          <a title={`Go to ${plantName}`}>
            <div className="opacity-60 hover:opacity-70 inline-block">
              <ImageContentfull src={image.url} layout="intrinsic" width={900} className="rounded-lg shadow-xl" aspectRatio='16:9' fit="fill" />
            </div>
            <div className="text-container absolute">
              <Typography
                variant="h1"
                component="h2"
                className="break-words text-left text-6xl sm:text-8xl"
              >
                {plantName}
              </Typography>
            </div>
          </a>
        </Link>
      </div>

      <style jsx>{`
        .text-container {
          top: 50%;
          transform: translateY(-50%);
          max-width: 600px;
          left: 3vh;
        }

        @media screen and (min-width: 600px) {
          .text-container {
            max-width: 600px;
            left: 10vh;
          }
        }

        @media screen and (min-width: 1300px) {
          .text-container {
            max-width: 800px;
            left: 18vh;
          }
        }
      `}</style>
    </div>
  )
}
