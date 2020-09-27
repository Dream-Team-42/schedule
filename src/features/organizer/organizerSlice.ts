import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { message } from "antd";
import { AppThunk, RootState } from "../../app/store";
import { baseURL, teamID } from "../../constants/magicVars";
import {
  emptyOrganizer,
  Organizer,
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
  const hideMessage = message.loading("Posting the organizer...");
  const response = await fetch(`${baseURL}/team/${teamID}/event`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(organizer),
  });

  if (response.ok) {
    hideMessage();
    dispatch(addOrganizer(organizer));
    let json = await response.json();
    message.success(`${organizer.name.slice(0, 10)} posted!`);
  } else {
    hideMessage();
    message.error(
      `${organizer.name.slice(0, 10)} not posted. Error: ${response.statusText}`
    );
  }
};

/**
 * Request Organizers from database
 */
export const getOrganizersList = (): AppThunk => async (dispatch) => {
  const hideMessage = message.loading("Loading organizers...");
  const response = await fetch(`${baseURL}/team/${teamID}/events`);

  if (response.ok) {
    hideMessage();

    let json = await response.json();
    const { data } = json;
    data.forEach((organizer: Organizer) => {
      dispatch(addOrganizer(organizer));
    });
  } else {
    hideMessage();
    message.error(
      `Can't get organizers from server. Error: ${response.statusText}`
    );
  }
};

/**
 * Find organizer by ID in database
 * @param organizerID
 */
export const getOrganizer = (organizerID: string): AppThunk => async (
  dispatch
) => {
  const hideMessage = message.loading("Looking for the organizer...");
  const response = await fetch(
    `${baseURL}/team/${teamID}/event/${organizerID}`
  );

  if (response.ok) {
    hideMessage();

    let json = await response.json();
    message.success(`${json.name.slice(0, 10)} found!`);
    return json;
  } else {
    message.error(
      `Can't get organizer from server. Error: ${response.statusText}`
    );
  }
};

/**
 *  Update organizer in database
 */
export const putOrganizer = (organizer: Organizer): AppThunk => async (
  dispatch
) => {
  const hideMessage = message.loading("Updating the organizer...");

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
    hideMessage();
    dispatch(updateOrganizer(newOrganizer));
    message.success(`${newOrganizer.name} updated!`);
  } else {
    hideMessage();
    message.error(
      `Can't update ${organizer.id}. Status: ${response.status}:${response.statusText}`
    );
  }
};

export const deleteOrganizer = (organizerID: string): AppThunk => async (
  dispatch
) => {
  const hideMessage = message.loading("Deleting the organizer...");
  const response = await fetch(
    `${baseURL}/team/${teamID}/event/${organizerID}`,
    {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ id: organizerID }),
    }
  );

  if (response.ok) {
    hideMessage();
    dispatch(removeOrganizer(organizerID));

    message.success("Organizer deleted!");
  } else {
    hideMessage();
    message.error(
      `Can't delete ${organizerID}. Status: ${response.status}:${response.statusText}`
    );
  }
};
