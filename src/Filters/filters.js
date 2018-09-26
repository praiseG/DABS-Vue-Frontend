import moment from 'moment';

export const formatDate =  value =>  moment(String(value)).format('YYYY-MM-DD');

export const formatDateTime =  value =>  moment(String(value)).format('YYYY-MM-DD HH:mm');

export const toLowerCase = value => String(value).toLowerCase();

export const toUpperCase = value => String(value).toUpperCase();

export const capitalize = value => String(value).charAt(0).toUpperCase() + String(value).slice(1);