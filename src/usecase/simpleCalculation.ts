const operations: Record<string, (a: number, b: number) => number> = {
  '+': (a: number, b: number): number => a + b,
  '-': (a: number, b: number): number => a - b,
  ['x']: (a: number, b: number): number => a * b,
  '/': (a: number, b: number): number => a / b,
};

const simpleCalculation = {
  handle: (entry: string): string => {
    try {
      const elements: string[] = entry.split(' ');
      const operation: string = String(elements[1]);
      const result: number = operations[operation](
        Number(elements[0]),
        Number(elements[2]),
      );
      if (isNaN(result)) {
        throw new Error('The result is not a number');
      }
      return String(result);
    } catch {
      return 'ERROR';
    }
  },
};

export default simpleCalculation;
