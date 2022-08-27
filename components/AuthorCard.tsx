import { Typography } from '@ui/Typography'

export function AuthorCard({
  fullName,
  biography,
  photo,
  linkedIn,
  twitter,
}: Author) {
  return (
    <div className="md:flex mb-3">
      <div className="pr-8 pb-4 flex-shrink-0">
        <img src={photo.url} width={192} />
      </div>
      <div className="self-center" >
        <Typography variant="h5" component="p">
          {fullName}
        </Typography>
        <Typography variant="body1" color="textSecondary" className="py-4">
          {biography}
        </Typography>
        <div className="flex justify-center">
          <a
            href={linkedIn}
            title={`Follow ${fullName} on LinkedIn`}
            target="_blank"
            className="pr-4 pl-4 pt-2 pb-2 mr-4 bg-gray-300 hover:bg-gray-400 rounded-lg"
          >
            Linkedin
          </a>
          <a
            href={twitter}
            title={`Follow ${fullName} on Twitter`}
            target="_blank"
            className="pr-4 pl-4 pt-2 pb-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  )
}
