/* eslint-disable consistent-return */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-param-reassign */
/* eslint-disable no-multi-assign */ 
import _ from 'lodash';
import { differenceInMinutes } from 'date-fns';
import ceil from 'lodash/ceil';
import { BUSINESS_CATEGORY } from '../data';
export const getCategories = () => {
  const arr = [];
  _.forEach(BUSINESS_CATEGORY, (x) => {
    arr.push(x.category);
  });

  const data = _.map(arr, (x) => ({
    label: x,
    value: x,
  }));
  return data;
};

export const getSubCategories = (category) => {
  const obj = _.find(BUSINESS_CATEGORY, (x) => x.category === category);
  if (!obj) return [];
  const data = _.map(obj.subCategory, (x) => ({
    label: x,
    value: x,
  }));
  return data;
};

export const utcToLocalDateFormatter = (value) => {
  const parsedDate = Date.parse(value);
  const isValidDate = Number.isNaN(parsedDate);
  if (isValidDate) {
    return '';
  }
  const date = new Date(parsedDate);
  value = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}: ${date.getHours()}:${date.getMinutes()}`;
  return value;
};

export const getCurrentDateTime = () => {
  const date = new Date();
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}: ${date.getHours()}:${date.getMinutes()}`;
};

export const getProfileCompletionScore = (data) => {
  let score = 0;
  if (!data) return score;
  if (data.AccountActivation === 'Completed') {
    score += (100 * 16.66) / 100;
  }
  if (data.AddressDetails === 'Completed') {
    score += (100 * 16.66) / 100;
  }
  if (data.BankDetails === 'Completed') {
    score += (100 * 16.66) / 100;
  }
  if (data.BusinessDetails === 'Completed') {
    score += (100 * 16.66) / 100;
  }
  if (data.ContactDetails === 'Completed') {
    score += (100 * 16.66) / 100;
  }
  if (data.Documents === 'Completed') {
    score += (100 * 16.66) / 100;
  }
  score = Math.round(score);
  return score;
};


export const responseBuilder = (response) => {
  debugger;
  let responseBody = null;
  if (!response) {
    return responseBody;
  }
  const { data } = response;
  if (!data) {
    return responseBody;
  }
  if ((data && data.statusCode) &&
    data?.statusCode &&
    (data?.statusCode === 200 || data?.statusCode === 201)
  ) {
    responseBody = data?.payload || {};
  }
  return responseBody;
};

function renderProductCount(page, perPageProduct, totalProduct) {
  let startNumber = (page - 1) * perPageProduct;
  let endNumber = page * perPageProduct;

  if (endNumber > totalProduct) {
    endNumber = totalProduct;
  }

  return `Showing ${startNumber - 1}-${endNumber} of ${totalProduct} products`;
}

export function getLastFourDight(num) {
  ;
  if (num) {
    let val=num.toString();
    return val.substr(val.length - 5);
  } else {
    return '';
  } 
}

export const getDateDifference = (date) => {
      
  let diff = differenceInMinutes(new Date(), new Date(date));
  if (diff < 60) return diff + ' minutes ago';
  diff = ceil(diff / 60);
  if (diff < 24) return `${diff} hour${diff === 0 ? '' : 's'} ago`;
  diff = ceil(diff / 24);
  if (diff < 30) return `${diff} day${diff === 0 ? '' : 's'} ago`;
  diff = ceil(diff / 30);
  if (diff < 12) return `${diff} month${diff === 0 ? '' : 's'} ago`;
  diff = diff / 12;
  return `${diff.toFixed(1)} year${ceil(diff) === 0 ? '' : 's'} ago`;
};


export { renderProductCount };

