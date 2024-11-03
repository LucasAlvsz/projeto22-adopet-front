import axios from "axios";
import { createContext, useState, useContext } from "react";

import { AuthContext } from "./AuthProvider";
import formatFilters from "../utils/formatFiltersUtils";

export const PetsContext = createContext();

export const PetsProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  const [likedPets, setLikedPets] = useState([]);
  const { user } = useContext(AuthContext);

  const getPets = (filters) => {
    const formattedFilters = formatFilters(filters);
    return axios.get(
      `${"https://special-goggles-p5jwqjx65x6275jx-3000.app.github.dev"}/pets?${formattedFilters}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
  };

  const getProfileById = (petId) => {
    return axios.get(
      `${"https://special-goggles-p5jwqjx65x6275jx-3000.app.github.dev"}/pets/profile/${petId}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
  };

  const getLikedPets = (filters) => {
    const formatedFilters = formatFilters(filters);
    return axios.get(
      `${"https://special-goggles-p5jwqjx65x6275jx-3000.app.github.dev"}/pets/interested?${formatedFilters}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
  };

  const addNotInterestedPet = (petId) => {
    return axios.post(
      `${"https://special-goggles-p5jwqjx65x6275jx-3000.app.github.dev"}/pets/${petId}/not-interested`,
      "",
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
  };

  const addInterestedPet = (petId) => {
    return axios.post(
      `${"https://special-goggles-p5jwqjx65x6275jx-3000.app.github.dev"}/pets/${petId}/interested`,
      "",
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
  };

  const getBreeds = (petTypeId) => {
    const queryString = petTypeId ? `?type[id]=${petTypeId}` : "";
    return axios.get(
      `${"https://special-goggles-p5jwqjx65x6275jx-3000.app.github.dev"}/pets/breeds${queryString}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
  };

  const getPetTypes = () => {
    return axios.get(
      `${"https://special-goggles-p5jwqjx65x6275jx-3000.app.github.dev"}/pets/types`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
  };

  return (
    <PetsContext.Provider
      value={{
        pets,
        setPets,
        likedPets,
        setLikedPets,
        getPets,
        getProfileById,
        getLikedPets,
        addNotInterestedPet,
        addInterestedPet,
        getBreeds,
        getPetTypes,
      }}
    >
      {children}
    </PetsContext.Provider>
  );
};
