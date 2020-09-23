import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";
import { baseURL, teamID } from "../../constants/magicVars";
import {
  emptyOrganizer,
  Organizer,
  OrganizerFields,
  OrganizerState
} from "../../constants/types";

const initialState: OrganizerState = [];

export const organizerSlice = createSlice({
  name: "organizer",
  initialState,
  reducers: {
    addOrganizer: (
      state: OrganizerState,
      action: PayloadAction<Organizer>
    ): OrganizerState => {
      return [...state, action.payload];
    },
    removeOrganizer: (
      state: OrganizerState,
      action: PayloadAction<string>
    ): OrganizerState => {
      return state.filter((org) => org.id !== action.payload);
    },
    updateOrganizer: (
      state: OrganizerState,
      action: PayloadAction<Organizer>
    ): OrganizerState => {
      const { payload } = action;

      return state.filter((org) => {
        if (org.id !== payload.id) return org;

        return {
          ...org,
          ...payload,
        };
      });
    },
  },
});

export const {
  addOrganizer,
  removeOrganizer,
  updateOrganizer,
} = organizerSlice.actions;
export const selectOrganizerList = (state: RootState) => state.organizer;
export default organizerSlice.reducer;

/**
 * Post new Organizer to database
 * @param organizer new Organizer
 */
export const postOrganizer = (organizer: Organizer): AppThunk => async (
  dispatch
) => {
  const response = await fetch(`${baseURL}/team/${teamID}/event`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(organizer),
  });

  if (response.ok) {
    dispatch(addOrganizer(organizer));
    let json = await response.json();
    alert(`OK, ${json.id} organizer add`);
  } else {
    alert("Error: " + response.status);
  }
};

/**
 * Request Organizers from database
 */
export const getOrganizersList = (): AppThunk => async (dispatch) => {
  const response = await fetch(`${baseURL}/team/${teamID}/events`);

  if (response.ok) {
    let json = await response.json();
    console.log(json);
    const { data } = json;
    data.forEach((organizer: Organizer) => {
      dispatch(addOrganizer(organizer));
    });
  } else {
    alert("Error " + response.status);
  }
};

/**
 * Find organizer by ID in database
 * @param organizerID
 */
export const getOrganizer = (organizerID: string): AppThunk => async (
  dispatch
) => {
  const response = await fetch(
    `${baseURL}/team/${teamID}/event/${organizerID}`
  );

  if (response.ok) {
    let json = await response.json();
    dispatch(addOrganizer(json));
  } else {
    alert("Error " + response.status);
  }
};

/**
 *  Update organizer in database
 */
export const putOrganizer = (organizer: OrganizerFields): AppThunk => async (
  dispatch
) => {
  const newOrganizer: Organizer = {
    ...emptyOrganizer,
    ...organizer,
  };

  const response = await fetch(
    `${baseURL}/team/${teamID}/event/${organizer.id}`,
    {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newOrganizer),
    }
  );

  if (response.ok) {
    dispatch(updateOrganizer(newOrganizer));
    alert(`Organizer ${newOrganizer.id} is update.`);
  } else {
    alert(
      `Can't update ${newOrganizer.id}. Status: ${response.status}:${response.statusText}`
    );
  }
};

export const deleteOrganizer = (organizerID: string): AppThunk => async (
  dispatch
) => {
  const response = await fetch(
    `${baseURL}/team/${teamID}/event/${organizerID}`,
    {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ id: organizerID }),
    }
  );

  if (response.ok) {
    dispatch(removeOrganizer(organizerID));
    alert(`Organizer ${organizerID} is delete.`);
  } else {
    alert(
      `Can't delete ${organizerID}. Status: ${response.status}:${response.statusText}`
    );
  }
};

/**
 * Request Organizer from database
 */
export const getOrganizerList = (): AppThunk => async (dispatch) => {
  const response = await fetch(`${baseURL}/team/${teamID}/events`);

  if (response.ok) {
    let json = await response.json();
    console.log(json);
    const { data } = json;
    data.forEach((organizer: Organizer) => {
      dispatch(addOrganizer(organizer));
    });
  } else {
    alert("Error " + response.status);
  }
};
