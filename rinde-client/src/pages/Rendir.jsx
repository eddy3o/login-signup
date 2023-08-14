

export function Rendir() {

  function addCommasToNumber(number) {
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  function handleInputChange(e) {
    const inputValue = e.target.value.replace(/,/g, ''); // Eliminar comas existentes
    const formattedValue = addCommasToNumber(inputValue);
    e.target.value = formattedValue;
  }

  function handleKeyPress(e) {
    const keyCode = e.keyCode || e.which;
    const isValidKey = keyCode >= 48 && keyCode <= 57; // Códigos de tecla para números del 0 al 9
    if (!isValidKey) {
      e.preventDefault();
    }
  }

  const SvgIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-gray-400"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Contenido SVG aquí */}
    </svg>
  );

  return (
    <div>
      <div className='main-bar bg-[#e7eefafb] h-[75rem] w-[100%] '>
        <div className='up-bar bg-white w-[100%] h-[45px] flex items-center'>
            <button className='px-[25px] bg-[#e7eefafb] h-[45px] text-[#316197] font-bold'>Editar Gasto</button>
        </div>
        <div className="centro flex">
          <div className="left-part w-[50%] h-auto">
            <div className="contenedores w-[80%] flex flex-col">
              <div className="contenedor-1 relative top-8 left-6 h-auto px-6 pt-4 pb-4 bg-white w-full">
                <div className="pb-5">
                  <h2 className=" font-semibold">Proveedor</h2>
                  <input type="proveedor" placeholder="Nombre Proveedor..." className="block w-full h-[1.6rem]  border-[1px] border-gray-300 pl-2 text-sm "/>
                </div>
                <div className="pb-5">
                  <h2 className=" font-semibold">Fecha Emisión</h2>
                  <input type="date"  className="block w-[8rem] h-[1.6rem]  border-[1px] border-gray-300 pl-2 text-sm"/>
                </div>
                <div className="pb-5">
                  <h2 className=" font-semibold">Impuesto</h2>
                  <div className="impuesto relative">
                      <select className="block w-[12rem] h-[1.6rem]  border-[1px] border-gray-300 pl-2 text-sm focus:outline-none focus:ring focus:border-blue-400">
                        <option value="NA">No aplica...</option>
                        <option value="FACEX">Factura Exenta (0.00%)</option>
                        <option value="IVA">IVA (19.00%)</option>
                        <option value="RET">Retencion (10.00%)</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        {SvgIcon}
                      </div>
                    </div>
                </div>
                <div className="pb-2">
                  <h2 className=" font-semibold">Total</h2>
                  <div className="flex space-x-2">
                    <input 
                      type="text" 
                      inputMode='numeric' 
                      className="block w-[12rem] h-[1.6rem]  border-[1px] border-gray-300 pl-2 text-sm "
                      onInput={handleInputChange}
                      onKeyPress={handleKeyPress}
                    />
                    <div className="moneda relative">
                      <select className="block w-full h-[1.6rem]  border-[1px] border-gray-300 pl-2 text-sm focus:outline-none focus:ring focus:border-blue-400">
                        <option value="USD">USD</option>
                        <option value="CLP">CLP</option>
                        <option value="EUR">EUR</option>
                        <option value="MXN">MXN</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        {SvgIcon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contenedor-2 relative top-[3rem] left-6 h-auto px-6 pt-4 pb-4 bg-white w-full">
                <div className="pb-5">
                  <h2 className=" font-semibold">Centro de Costo</h2>
                  <input type="centro-de-costo"  className="block w-[12rem] h-[1.6rem]  border-[1px] border-gray-300 pl-2 text-sm "/>
                </div>
                <div className="pb-5">
                  <h2 className=" font-semibold">RUT</h2>
                  <input type="rut" className="block w-full h-[1.6rem]  border-[1px] border-gray-300 pl-2 text-sm "/>
                </div>
                <div className="pb-5">
                  <h2 className=" font-semibold">Tipo Documento</h2>
                  <input type="tipo-documento" className="block w-[12rem] h-[1.6rem]  border-[1px] border-gray-300 pl-2 text-sm "/>
                </div>
                <div className="pb-2">
                  <h2 className=" font-semibold">N° Documento</h2>
                  <input type="n-documento" className="block w-[12rem] h-[1.6rem]  border-[1px] border-gray-300 pl-2 text-sm "/>
                </div>
              </div>
              <div className="contenedor-3 relative top-[4rem] left-6 h-auto px-6 pt-4 pb-4 bg-white w-full">
                <div className="pb-5">
                  <h2 className=" font-semibold">Categoría</h2>
                  <input type="categoria" className="block w-[12rem] h-[1.6rem]  border-[1px] border-gray-300 pl-2 text-sm "/>
                </div>
                <div className="pb-2">
                  <h2 className=" font-semibold">Nota</h2>
                  <textarea className="block w-full h-[11.2rem] border-[1px] border-gray-300 p-2 text-sm resize-none" style={{ verticalAlign: 'top' }}></textarea>
                </div>
              </div>

              <div className="contenedor-buttons relative top-[4rem] left-6 h-auto px-6 py-4 w-full">
                <div className="space-x-[2rem] flex justify-center items-center">
                  <button className="w-[7rem] bg-white h-11 font-bold text-[#316197] transition duration-300 hover:text-[#316197b9]">Guardar</button>
                  <button className="w-[7rem] bg-green-600 h-11 font-bold text-white transition duration-300 hover:bg-green-500">Listo</button>
                </div>
              </div>
            </div>
          </div>
          <div className="right-part w-[50%] h-auto">
            <div className="relative top-8">
              <div className="h-[10rem] bg-white w-[90%] z-1">
              </div>
              <div className="py-4 px-2">
                <button className="text-[#316197] font-bold transition duration-300 hover:text-[#316197b9]">Adjuntar desde galería...</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
