**Vistas de suministro/ influencia de la priorización**

hay un flujo específico del que depende toda la operabilidad de la plataforma de suministro y esa es la priorización de proyectos:

a ver, en el marco de la construcción de minigranjas hay varios roles, uno de ellos son los inversionistas, estas son entidades que ingresan dinero y reciben proyectos de minigranjas funcionales para producción, venta, consumo etc de energia solar, sucede que estos inversionistas no solo pueden tener un único proyecto sino que adquieren paquetes de varios tipos de proyectos, a estos paquetes se les conoce como “portafolios” y dentro de dichos portafolios, existen los proyectos minigranja en cantidades, para nosotros “Solenium” existen varios portafolios que se comparten entre varios inversionistas pero para el inversionista es él quien tiene varios portafolios individuales, nunca compartidos, es decir Inversionista A participa de portafolios 1, 2 y 3, el sabe que tiene esos portafolios, pero en gestión solenium Inversionista B y C también participan de portafolios 1,2 y 3 solo que sin saber de la presencia de los otros por temas de seguridad.

Resulta que los inversionistas, ingresan dinero con una metodología de “HITOS”  
que se registran en un cronograma, es decir que, si soy inversionista A y uno de los 10 proyectos míos en el portafolio 1 terminó el Hito de diseño, yo pago el siguiente hito para que puedan arrancar, por ejemplo con el Hito de pedido de equipos internacionales.  
Esto es importante tenerlo en cuenta porque para manejar el flujo de construcción y operación de cientos de minigranjas a nivel colombia es imprescindible hacer un proceso de “Priorización” no tenemos la capacidad de montar al mismo tiempo cientos de minigranjas.

Resulta que los días martes a las 8am hay una reunión entre los equipos de ingenieros de proyectos, portafolio Managers, C-levels y más para definir esa semana que proyectos son prioritarios, que hitos se deben cumplir de primero, que equipos deben estar disponibles en que proyectos, esto sucede entre 3 empresas: unergy encargado de los terrenos, inversionistas y de cara a un publico comercial, solenium, encargado de la construcción y operación de las minigranjas, y zentrack encargado de proporcionarnos cierto equipamiento y su mantenimiento y seguimiento.

Resulta que en unergy deciden que proyectos están priorizados acorde a varios factores, como el vencimiento de contrato, pago de hitos ( si un inversionista, pagó un hito pues hay que hacerlo lo mas pronto posible) estrategias comerciales y otros.

Con esa información que llega a manos de solenium, empezamos a revisar que necesita ese proyecto, que tipo de tracker, que tipo de paneles, que tipo de inversores etc, información disponible dentro de las hojas de vida en la plataforma diseñada para ingenieros y managers, de allí, se pasa a hacer la solicitud de compra, piden, se pasa todo el proceso tributario y los barcos o aviones parten. 

pero resulta que las prioridades son volátiles, y cambian, muy constantemente, entonces el proyecto que un dia es prioritario, puede ser rebasado por otro proyecto más prioritario que se definió después de que los equipos para el proyecto en segunda posición hayan sido pedidos, ahí es cuando entra alguien del personal de suministro y dice: “un momentito, este proyecto 0004 es el más reciente prioritario, y necesita un tracker con características específicas según la HV del proyecto que viene de managers” entonces esa persona necesita abrir suministro y empezar a buscar ese tipo de tracker en que BL viene, y si de casualidad resulta que hay un barco que lo trae pero ya viene asignado hacia otro proyecto, pero que de pronto no está al mismo nivel de priorización que el proyecto 0004 por tanto podría entrar y reasignar esa carga de trackers al proyecto más prioritario.

Resulta que entonces son 2 tipos de HV de proyectos, la HV que pertenece con la funcionalidad jerárquica principal de reasignación de equipo entre proyectos, y la HV que viene dada desde otra plataforma, que me trae la lista de requerimientos del equipo, es importante que, en la gestión de proyectos, exista esta modal y que sea en natura diferente\! a la HV de reasignación, sin perder nada de la información que ya tienen, la única diferencia es la función de asignación.

Otro detalle importante, es muy relevante tener la información de los proyectos priorizados en la vista de suministro, por eso se creo el slide bottom center de “Portafolios priorizados” pero, este slide in modal necesita un refactor, y es que debe incluir las columnas de estado de los equipos 

paneles — inversores — reconectadores —  Trackers — Shelters

y  cada columna debe tener el estado mas reciente de dicho tipo de equipo, la fecha de cumplimiento de dicho estado y la HV de requerimiento, y si por ejemplo a un proyecto le falta un equipo, debo notarlo, debo ver la HV de requerimiento y debo afectar la vista de suministro filtrando la busqueda por un tracker con esos mismos requerimientos, con propiedades similares que coincidan, dadas de la misma descripción de las especificaciones del equipo:

estas propiedades para filtrar son: categoria, hileras, corrosión atmosférica, corrosión del suelo y zona de vientos.

si dichas propiedades coinciden entre la HV de requerimientos y algunas HV de productos en viaje, debo filtrar la vista.