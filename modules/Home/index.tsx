import Spacing from "@components/Layout/Spacing";
import PhotoContainer from "./components/PhotoContainer";
import { GridWrapper, HomeCenterText } from "./styled";
import { Photo } from "@globalTypes/Photo";
import usePhotos from "./hooks/usePhotos";

const HomeModule = () => {
  const { photos, noMatches } = usePhotos();

  if (noMatches) return <HomeCenterText>No matches</HomeCenterText>;
  
  if (photos.length === 0)
    return <HomeCenterText>No photos yet</HomeCenterText>;

  return (
    <>
      <Spacing size={2} />
      <GridWrapper>
        {photos.map((photo: Photo) => (
          <PhotoContainer {...photo} key={photo._id} />
        ))}
      </GridWrapper>
      <Spacing size={3} />
    </>
  );
};

export default HomeModule;
