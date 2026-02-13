import { AddToCollectionButton } from './addToCollectionButton';
import { TMDBImage, getURLForSize } from './tmdbImg';
import DownloadIcon from '#assets/download.svg';

export const ModalTMDBImage = (props: {
  type: 'backdrop' | 'logo' | 'poster' | 'profile' | 'still';
  movie_id: string;
  file_path: string;
  inCollection: boolean;
  aspect_ratio: number;
  height: number;
  width: number;
}) => {
  return (
    <div className="relative top-0 grid h-full max-h-screen grid-rows-[1fr_3rem] gap-2">
      <div className="flex items-center justify-center overflow-hidden">
        <TMDBImage
          type={props.type}
          path={props.file_path}
          className="max-h-[100%] w-full max-w-[100%] object-contain"
          fullSize={true}
        />
      </div>
      <div className="dark:(invert-0) flex flex-row items-center gap-8 justify-self-center rounded-md bg-black p-4 text-white shadow-lg invert filter">
        <p>
          {props.width} X {props.height}
        </p>
        <a
          href={getURLForSize('original', props.file_path)}
          download={true}
          target="_blank"
        >
          <img
            src={DownloadIcon}
            className="h-full w-full"
          />
        </a>
        <AddToCollectionButton {...props} />
      </div>
    </div>
  );
};
