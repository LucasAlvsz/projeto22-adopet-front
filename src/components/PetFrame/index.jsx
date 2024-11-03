/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { PetsContext } from "../../providers/PetsProvider";

import { IoLocationSharp as LocationIcon } from "react-icons/io5";
import { TbVaccine as VaccineIcon } from "react-icons/tb";

import DogProfileIcon from "../../assets/icons/dogIcon.png";
import CatProfileIcon from "../../assets/icons/catIcon.png";

import * as S from "./styles";

const PetFrame = ({
  id,
  petName,
  type,
  breed,
  mainPic,
  vaccinated,
  address,
  setCurrentPet,
}) => {
  const navigate = useNavigate();
  const { addNotInterestedPet, addInterestedPet } = useContext(PetsContext);
  return (
    <S.Content>
      <img src={mainPic} alt={petName + "picture"} />
      {vaccinated && (
        <S.VaccineIconContainer>
          <VaccineIcon style={S.VaccineIcon} />
        </S.VaccineIconContainer>
      )}
      <S.ContentInfos>
        <S.Title>{petName}</S.Title>
        <span>
          <S.InfoContainer>
            <LocationIcon style={S.InfoIcon} />
            <p>
              {address?.city} - {address.state}
            </p>
          </S.InfoContainer>
          <S.InfoContainer>
            <p>{breed}</p>
          </S.InfoContainer>
        </span>
      </S.ContentInfos>
      <S.ButtonsContainer>
        <button
          onClick={() =>
            addNotInterestedPet(id)
              .then(() => setCurrentPet(+1))
              .catch(({ response }) => console.log(response.data))
          }
        >
          ❌<p>Nope</p>
        </button>
        <button onClick={() => navigate(`/profile/${id}`)}>
          <img src={type === "dog" ? DogProfileIcon : CatProfileIcon} />
          <p>Profile</p>
        </button>
        <button
          onClick={() =>
            addInterestedPet(id)
              .then(() => setCurrentPet(+1))
              .catch(({ response }) => console.log(response.data))
          }
        >
          💗
          <p>Like</p>
        </button>
      </S.ButtonsContainer>
    </S.Content>
  );
};

export default PetFrame;
