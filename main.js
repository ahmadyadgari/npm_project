import lodash from 'lodash';
import chalk from 'chalk';

const array = [1, 2, 3, 4, 4, 1, 5, 5, 5];
const uniqueNums = lodash.uniq(array);

console.log(chalk.green(uniqueNums));

console.log(chalk.blue('Hello, Chalk!'));