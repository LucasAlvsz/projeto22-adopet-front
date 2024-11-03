import { useContext, useEffect, useState } from "react";

import { PetsContext } from "../../providers/PetsProvider";

import Header from "../../components/Header";
import MiniPetFrame from "../../components/MiniPetFrame";
import Footer from "../../components/Footer";
import NothingHere from "../../components/NothingHere";
import Loading from "../../components/Loading";

import * as S from "./styles";
import Filters from "../../components/Filters";

const Liked = () => {
  const { getLikedPets, likedPets, setLikedPets } = useContext(PetsContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getLikedPets()
      .then(({ data }) => setLikedPets(data))
      .catch(({ response }) => console.log(response))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main>
      <Header />
      <Filters
        getPets={(filters) =>
          getLikedPets(filters)
            .then(({ data }) => setLikedPets(data))
            .catch(({ response }) => console.log(response.data))
        }
      />
      <S.Content>
        {(loading ? (
          <Loading width="50%" height="50%" center="true" />
        ) : (
          likedPets?.length &&
          likedPets.map(({ pet }) => (
            <MiniPetFrame
              key={pet.id}
              id={pet.id}
              petName={pet.name}
              mainPic={pet.petPictures[0].picture.url}
              address={pet.ownerUser.address}
            />
          ))
        )) || <NothingHere />}
      </S.Content>
      <Footer />
    </main>
  );
};

export default Liked;
