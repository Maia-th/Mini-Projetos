export function escape(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const metodoOriginal = descriptor.value;
  descriptor.value = function (...args: any[]) {
    let retorno = metodoOriginal.apply(this, args);
    if (typeof retorno === "string") {
    //   console.log(
    //     `Escape em acao na classe ${this.constructor.name} e no metodo ${propertyKey}`
    //   );
      retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    return retorno;
  };
  return descriptor;
}
