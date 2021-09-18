let currentProcessor;

const process = (_type, context) => {
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
          const processed = currentProcessor(context);
          context = processed;
          return processed;
        }
        context[property] = process(_type, context[property]);
      }
    }
  }
  return context;
};

export const processAllofType = (_type, context, processor) => {
  if (!currentProcessor || currentProcessor !== processor) {
    currentProcessor = processor;
  }
  return process(_type, context);
};
