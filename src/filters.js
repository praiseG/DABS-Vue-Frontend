import moment from 'moment';

export const formatDate =  value => {
    return moment(String(value)).format('YYYY-MM-DD');
}
