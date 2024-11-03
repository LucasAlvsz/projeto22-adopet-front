import { useContext, useEffect, useState } from "react";

import { PetsContext } from "../../providers/PetsProvider";

import Header from "../../components/Header";
import PetFrame from "../../components/PetFrame";
import Footer from "../../components/Footer";
import Filters from "../../components/Filters";
import NothingHere from "../../components/NothingHere";
import Loading from "../../components/Loading";

import * as S from "./styles";

const Discover = () => {
  const { getPets, pets, setPets } = useContext(PetsContext);
  const [currentPet, setCurrentPet] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getPets()
      .then(({ data }) => setPets(data))
      .catch(({ response }) => console.log(response.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main>
      <Header />
      <S.Discover>
        <Filters
          getPets={(filters) =>
            getPets(filters)
              .then(({ data }) => setPets(data))
              .catch(({ response }) => console.log(response.data))
          }
        />
        <S.Container>
          {(loading ? (
            <Loading width="50%" height="50%" center="true" />
          ) : (
            pets.length &&
            currentPet < pets.length && (
              <PetFrame
                key={pets[currentPet].id}
                id={pets[currentPet].id}
                petName={pets[currentPet].name}
                type={pets[currentPet].type}
                age={pets[currentPet].age}
                address={pets[currentPet].ownerUser.address}
                vaccinated={pets[currentPet].vaccinated}
                breed={pets[currentPet].breed.name}
                mainPic={pets[currentPet].petPictures[0].picture.url}
                setCurrentPet={(currentPic) =>
                  setCurrentPet(currentPic + currentPet)
                }
              />
            )
          )) || <NothingHere />}
        </S.Container>
        <Footer />
      </S.Discover>
    </main>
  );
};

export default Discover;
