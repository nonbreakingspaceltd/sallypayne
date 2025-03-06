type ProcessorFunction = (context: any) => any;

let currentProcessor: ProcessorFunction | undefined;

function process(_type: string, context: any): any {
  if (typeof context === 'object') {
    if (context === null) {
      return null;
    }
    if (Array.isArray(context)) {
      for (let i = 0; i < context.length; i++) {
        context[i] = process(_type, context[i]);
      }
    } else {
      for (const property in context) {
        if (property === '_type' && context[property] === _type) {
          if (!currentProcessor) {
            throw new Error('No processor set');
          }
          const processed = currentProcessor(context);
          return processed;
        }
        context[property] = process(_type, context[property]);
      }
    }
  }
  return context;
}

export function processAllofType(
  _type: string,
  context: any,
  processor: ProcessorFunction,
): any {
  if (!currentProcessor || currentProcessor !== processor) {
    currentProcessor = processor;
  }
  return process(_type, context);
}
