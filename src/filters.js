import moment from 'moment';

export const formatDate =  value =>  moment(String(value)).format('YYYY-MM-DD');

export const toLowerCase = value => String(value).toLowerCase();

export const toUpperCase = value => String(value).toUpperCase();

