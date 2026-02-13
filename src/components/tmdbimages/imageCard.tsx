import { TMDBImage } from '#/shared/components/tmdbimages/tmdbImg';
import { useModal } from '#/shared/hooks/useModal';
import { useCallback, useMemo } from 'react';
import { AddToCollectionButton } from '#/shared/components/tmdbimages/addToCollectionButton';
import { ModalTMDBImage } from '#/shared/components/tmdbimages/modalImage';
import { useImageIsInCollection } from '#/collection/hooks';

export const ImageCard = (props: {
  type: 'backdrop' | 'logo' | 'poster' | 'profile' | 'still';
  movie_id: string;
  file_path: string;
  aspect_ratio: number;
  height: number;
  width: number;
}) => {
  const { data, isLoading } = useImageIsInCollection(props.file_path);
  const inCollection = useMemo(() => {
    return !!data;
  }, [data]);
  const setModal = useModal();
  const imageToModal = useCallback(() => {
    setModal(
      <ModalTMDBImage
        {...props}
        inCollection={inCollection}
      />,
    );
  }, [setModal]);

  return (
    <div
      className={[
        'relative self-start',
        props.type == 'backdrop' && 'order-1 row-span-1',
        props.type == 'poster' && 'order-2 row-span-2',
      ].join(' ')}
    >
      <TMDBImage
        type={props.type}
        path={props.file_path}
        key={props.file_path}
        aspectRatio={props.aspect_ratio}
        className="w-full bg-gray-600"
      />
      <div
        className="absolute top-0 left-0 flex h-full w-full cursor-pointer flex-col items-end opacity-0 transition-opacity md:hover:opacity-100"
        onClick={() => imageToModal()}
      >
        <div className="bg-opacity-75 bg-white p-2 font-extralight italic dark:bg-black">
          <AddToCollectionButton
            {...props}
            loading={isLoading}
            inCollection={data !== undefined}
          />
        </div>
        <div className="bg-opacity-70 absolute bottom-0 left-0 bg-white dark:bg-black">
          {props.width} x {props.height}
        </div>
      </div>
    </div>
  );
};
