import {createLogger} from './index.js'

it('some',() => {
    const logger = createLogger();

    logger.console.warn('eeeee');
    logger.console.warn('434334');
    logger.console.warn('34sdff');

    let actual = logger.getRecords('warn');
    let expected = [{message: 'eeeee', dateTime: any(Date), type: 'warn'}]
   expected(actual).toEqual(expected);
});