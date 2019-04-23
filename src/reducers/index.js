import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import categoryReducer from './categoryReducer';
import subcategoryReducer from './subcategoryReducer';
import designersReducer from './designerReducer';
import advertisementReducer from './advertismentReducer';
import designerCountReducer from './DesignersCountReducer';
import designersByLikesReducer from './sortedDesignersByLikes';
import designersByDateReducer from './sortedDesignersByDateReducer';

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  categories: categoryReducer,
  subcategories: subcategoryReducer,
  designers: designersReducer,
  advertisements: advertisementReducer,
  designersCount: designerCountReducer,
  designersByLikes: designersByLikesReducer,
  designersByDate: designersByDateReducer
});
