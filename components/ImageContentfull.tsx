import React, { useCallback } from 'react'
import NextImage, { ImageLoaderProps, ImageProps as NextImageProps } from 'next/image'

type ImageFit = 'pad' | 'fill' | 'crop' | 'scale' | 'thumb'
type AspectRatio = '1:1' | '4:3' | '16:9' | '3:2' | '9:12'
type ImageLayout = 'intrinsic' | 'responsive' | 'fixed'
type DistributionOmit<T, K extends keyof T> = T extends unknown ? Omit<T, K> : never;

type ImageProps = {
  layout: ImageLayout
  src: string
  width: number
  height?: number
  className?: string
  aspectRatio: AspectRatio
  fit?: ImageFit
} & DistributionOmit<NextImageProps, 'height'>

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

  const loader = useCallback((args: ImageLoaderProps): string => {
    let loaderHeight = calcAspectRatio(aspectRatio, args.width)

    return `${args.src}?w=${args.width}&h=${loaderHeight}&fit=${fit}`
  }, [aspectRatio, fit]);

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
  '3:2': 2 / 3,
  '9:12': 12 / 9
}

function calcAspectRatio(
  aspectRatio: AspectRatio,
  width: number
): number {
  return Math.floor(width * aspectRatioToRatio[aspectRatio])
}
