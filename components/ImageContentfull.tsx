import React from 'react'
import NextImage, { ImageLoaderProps } from 'next/image'

type ImageProps = {
  layout: 'intrinsic' | 'responsive'
  src: string
  width: number
  height?: number
  className?: string
  aspectRatio: '1:1' | '4:3' | '16:9'
  fit?: 'pad' | 'fill' | 'crop' | 'scale'
}

export function ImageContentfull({
  layout,
  src,
  width,
  height,
  className,
  aspectRatio,
  fit = 'scale',
}: ImageProps): JSX.Element {
  const heightClc = height ? height : calcAspectRatio(aspectRatio, width)

  const loader = (args: ImageLoaderProps): string => {
    let loaderHeight = calcAspectRatio(aspectRatio, args.width)

    return `${args.src}?w=${args.width}&h=${loaderHeight}&fit=${fit}`
  }

  const props = {
    layout,
    src,
    width,
    height: heightClc,
    className,
  }

  return <NextImage {...props} loader={loader} />
}

const aspectRatioToRatio = {
  '1:1': 1,
  '4:3': 3 / 4,
  '16:9': 9 / 16,
}

function calcAspectRatio(
  aspectRatio: '1:1' | '4:3' | '16:9',
  width: number
): number {
  return Math.floor(width * aspectRatioToRatio[aspectRatio])
}
