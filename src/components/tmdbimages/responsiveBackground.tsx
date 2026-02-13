import { TMDBImage } from './tmdbImg';

export const ResponsiveBackground = (props: { imagePath: string }) => {
  return (
    <>
      <TMDBImage
        type="backdrop"
        path={props.imagePath}
        className="fixed top-0 left-0 -z-2 h-screen w-screen bg-cover object-cover"
        fullSize={true}
      />
    </>
  );
};
