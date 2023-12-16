import { globSync } from 'glob';
import * as cliSelect from 'cli-select';
import * as path from 'path';

function main(): void {
  const files = globSync(`${__dirname}/../example*.ts`);

  const mapped: string[] = files.sort((f1, f2) => {
    if (f1 === f2) return 1;

    if (f1.length === f2.length) {
      return f1 > f2 ? 1 : -1;
    }

    return f1.length > f2.length ? 1 : -1;
  });

  cliSelect({
    values: mapped,
    defaultValue: 0,
    selected: '(x)',
    unselected: '( )',
    valueRenderer: (value) => {
      return path.basename(value);
    },
  })
    .then((response) => {
      console.log(`Running example "${response.value}"`);

      try {
        import(`${response.value}`);
      } catch (e) {
        console.log(e);
      }
    })
    .catch(() => {
      console.log('cancelled');
    });
}

main();
