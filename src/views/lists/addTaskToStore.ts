import addTask from "../../actions/addTask";
import appStore from "../../appStore";
import { data } from "../../constants/data";

appStore.subscribe(() => {
  console.log(appStore.getState());
});

data.forEach((task) => {
  appStore.dispatch(addTask({ ...task }));
});
