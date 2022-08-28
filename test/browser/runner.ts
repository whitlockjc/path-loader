import {startKarma, stopKarma} from '../helpers';

async function main () {

  const info = await startKarma();

  await stopKarma(info);
}

main();
