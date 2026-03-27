import svgPaths from "./svg-q5mp3qjxfx";
import imgContainer from "figma:asset/4646f90295ad040523129bb18becca6c3cc688c2.png";

function Icon() {
  return (
    <div className="absolute left-[10px] size-[14px] top-[5.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M8.75 10.5L5.25 7L8.75 3.5" id="Vector" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[25px] relative rounded-[3px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Icon />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[11px] left-[80px] not-italic text-[#808080] text-[11px] text-center top-[6px]">Volver al Directorio</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[50px] items-start left-0 pb-px pl-[24px] pr-[795.469px] pt-[12px] top-0 w-[959.484px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#333] border-b border-solid inset-0 pointer-events-none" />
      <Button />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[36.391px] left-[132px] top-0 w-[755.484px]" data-name="Heading 1">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[36.4px] left-0 not-italic text-[#e0e0e0] text-[28px] top-0">Construcciones Eléctricas SAS</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[22.391px] left-[132px] top-[44.39px] w-[720px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.4px] left-0 not-italic text-[#b0b0b0] text-[14px] top-0">Especialistas en montaje fotovoltaico y obra civil para MGS. +5 años de experiencia en el sector energético.</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[rgba(0,200,83,0.15)] h-[27.5px] relative rounded-[3px] shrink-0 w-[112.406px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#00c853] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[16.5px] left-[10px] text-[#00c853] text-[11px] top-[5.5px]">Score: 86% SST</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex h-[27.5px] items-center left-[132px] top-[82.78px] w-[755.484px]" data-name="Container">
      <Container7 />
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] h-[110.281px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading />
        <Paragraph />
        <Container6 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[110.281px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container5 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[171.281px] items-start left-0 pb-px pt-[42px] px-[36px] top-[230px] w-[959.484px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#333] border-b border-solid inset-0 pointer-events-none" />
      <Container4 />
    </div>
  );
}

function Container9() {
  return <div className="absolute left-[694.58px] size-0 top-[34px]" data-name="Container" />;
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="Icon">
          <path d={svgPaths.p257f19f0} id="Vector" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d={svgPaths.p1eadf2b0} id="Vector_2" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function TextInput() {
  return (
    <div className="flex-[1_0_0] h-[16.797px] min-h-px min-w-px relative" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-[rgba(176,176,176,0.5)]">Buscar documentos...</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[#0a0a0a] content-stretch flex gap-[6px] h-[30.797px] items-center left-[697.58px] px-[10px] py-px rounded-[3px] top-[16.59px] w-[225.891px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Icon1 />
      <TextInput />
    </div>
  );
}

function Container11() {
  return <div className="absolute bg-[#1d99cc] h-[2px] left-0 top-[42px] w-[71.344px]" data-name="Container" />;
}

function Button1() {
  return (
    <div className="absolute h-[44px] left-[36px] top-[12px] w-[71.344px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[13px] left-[35.84px] not-italic text-[13px] text-center text-white top-[9px] w-[39px] whitespace-pre-wrap">📦 Todos</p>
      <Container11 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center left-[110.34px] px-[12px] py-[9px] top-[12px] w-[67.563px]" data-name="Button">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[13px] not-italic relative shrink-0 text-[#808080] text-[13px] text-center">⚖️ Legal</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center left-[180.91px] px-[12px] py-[9px] top-[12px] w-[60.844px]" data-name="Button">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[13px] not-italic relative shrink-0 text-[#808080] text-[13px] text-center">🛡️ SST</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center left-[244.75px] px-[12px] py-[9px] top-[12px] w-[90.516px]" data-name="Button">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[13px] not-italic relative shrink-0 text-[#808080] text-[13px] text-center">🌿 Ambiental</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center left-[338.27px] px-[12px] py-[9px] top-[12px] w-[92.359px]" data-name="Button">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[13px] not-italic relative shrink-0 text-[#808080] text-[13px] text-center">💰 Financiero</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center left-[433.63px] px-[12px] py-[9px] top-[12px] w-[80.375px]" data-name="Button">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[13px] not-italic relative shrink-0 text-[#808080] text-[13px] text-center">🚜 Equipos</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center left-[517px] px-[12px] py-[9px] top-[12px] w-[81.406px]" data-name="Button">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[13px] not-italic relative shrink-0 text-[#808080] text-[13px] text-center">⭐ Historial</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center left-[601.41px] px-[12px] py-[9px] top-[12px] w-[90.172px]" data-name="Button">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[13px] not-italic relative shrink-0 text-[#808080] text-[13px] text-center">🚚 Proyectos</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute border-[#333] border-b border-solid h-[57px] left-0 top-[401.28px] w-[959.484px]" data-name="Container">
      <Container9 />
      <Container10 />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
    </div>
  );
}

function Container13() {
  return <div className="absolute bg-[#00c853] h-0 left-0 top-[24px] w-[4px]" data-name="Container" />;
}

function TableCell() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[4px]" data-name="Table Cell">
      <Container13 />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[18px] relative shrink-0 w-[95.391px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#e0e0e0] text-[12px] top-0">RUT Actualizado</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center left-[48px] top-[15px] w-[541.484px]" data-name="Container">
      <Text />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[48px] left-[4px] top-0 w-[605.484px]" data-name="Table Cell">
      <Container14 />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[48px] left-[609.48px] top-0 w-[150px]" data-name="Table Cell">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] left-[16px] text-[#00c853] text-[11px] top-[16px]">Act. 05 Nov 2026</p>
    </div>
  );
}

function TableCell3() {
  return <div className="absolute h-[48px] left-[759.48px] top-0 w-[200px]" data-name="Table Cell" />;
}

function TableRow() {
  return (
    <div className="absolute border-[#1a1a1a] border-b border-solid h-[48px] left-0 top-0 w-[959.484px]" data-name="Table Row">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
    </div>
  );
}

function Container15() {
  return <div className="absolute bg-[#ff9800] h-0 left-0 top-[24px] w-[4px]" data-name="Container" />;
}

function TableCell4() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[4px]" data-name="Table Cell">
      <Container15 />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[120.719px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#e0e0e0] text-[12px] top-0">Cámara de Comercio</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center left-[48px] top-[15px] w-[541.484px]" data-name="Container">
      <Text1 />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[48px] left-[4px] top-0 w-[605.484px]" data-name="Table Cell">
      <Container16 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[48px] left-[609.48px] top-0 w-[150px]" data-name="Table Cell">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] left-[16px] text-[#ff9800] text-[11px] top-[16px]">17 Dic 2026</p>
    </div>
  );
}

function TableCell7() {
  return <div className="absolute h-[48px] left-[759.48px] top-0 w-[200px]" data-name="Table Cell" />;
}

function TableRow1() {
  return (
    <div className="absolute border-[#1a1a1a] border-b border-solid h-[48px] left-0 top-[48px] w-[959.484px]" data-name="Table Row">
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
    </div>
  );
}

function Container17() {
  return <div className="absolute bg-[#00c853] h-0 left-0 top-[24px] w-[4px]" data-name="Container" />;
}

function TableCell8() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[4px]" data-name="Table Cell">
      <Container17 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[18px] relative shrink-0 w-[148.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#e0e0e0] text-[12px] top-0">Estados Financieros 2025</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center left-[48px] top-[15px] w-[541.484px]" data-name="Container">
      <Text2 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[48px] left-[4px] top-0 w-[605.484px]" data-name="Table Cell">
      <Container18 />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[48px] left-[609.48px] top-0 w-[150px]" data-name="Table Cell">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] left-[16px] text-[#00c853] text-[11px] top-[16px]">Act. 30 Nov 2026</p>
    </div>
  );
}

function TableCell11() {
  return <div className="absolute h-[48px] left-[759.48px] top-0 w-[200px]" data-name="Table Cell" />;
}

function TableRow2() {
  return (
    <div className="absolute border-[#1a1a1a] border-b border-solid h-[48px] left-0 top-[96px] w-[959.484px]" data-name="Table Row">
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
    </div>
  );
}

function Container19() {
  return <div className="absolute bg-[#ff4d4d] h-0 left-0 top-[24px] w-[4px]" data-name="Container" />;
}

function TableCell12() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[4px]" data-name="Table Cell">
      <Container19 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g clipPath="url(#clip0_101_1269)" id="Icon">
          <path d={svgPaths.p1d11280} id="Vector" stroke="var(--stroke-0, #FF4D4D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d="M6.5 4.33333V6.5" id="Vector_2" stroke="var(--stroke-0, #FF4D4D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d="M6.5 8.66667H6.50542" id="Vector_3" stroke="var(--stroke-0, #FF4D4D)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        </g>
        <defs>
          <clipPath id="clip0_101_1269">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[18px] relative shrink-0 w-[61.453px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#e0e0e0] text-[12px] top-0">Póliza RCE</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[18px] items-center left-[48px] top-[15px] w-[541.484px]" data-name="Container">
      <Icon2 />
      <Text3 />
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[48px] left-[4px] top-0 w-[605.484px]" data-name="Table Cell">
      <Container20 />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[48px] left-[609.48px] top-0 w-[150px]" data-name="Table Cell">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] left-[16px] text-[#ff4d4d] text-[11px] top-[16px]">10 Dic 2026</p>
    </div>
  );
}

function TableCell15() {
  return <div className="absolute h-[48px] left-[759.48px] top-0 w-[200px]" data-name="Table Cell" />;
}

function TableRow3() {
  return (
    <div className="absolute border-[#1a1a1a] border-b border-solid h-[48px] left-0 top-[144px] w-[959.484px]" data-name="Table Row">
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
    </div>
  );
}

function Container21() {
  return <div className="absolute bg-[#00c853] h-0 left-0 top-[24px] w-[4px]" data-name="Container" />;
}

function TableCell16() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[4px]" data-name="Table Cell">
      <Container21 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[18px] relative shrink-0 w-[70.531px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#e0e0e0] text-[12px] top-0">ARL Vigente</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center left-[48px] top-[15px] w-[541.484px]" data-name="Container">
      <Text4 />
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[48px] left-[4px] top-0 w-[605.484px]" data-name="Table Cell">
      <Container22 />
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[48px] left-[609.48px] top-0 w-[150px]" data-name="Table Cell">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] left-[16px] text-[#00c853] text-[11px] top-[16px]">Act. 01 Dic 2026</p>
    </div>
  );
}

function TableCell19() {
  return <div className="absolute h-[48px] left-[759.48px] top-0 w-[200px]" data-name="Table Cell" />;
}

function TableRow4() {
  return (
    <div className="absolute border-[#1a1a1a] border-b border-solid h-[48px] left-0 top-[192px] w-[959.484px]" data-name="Table Row">
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
    </div>
  );
}

function Container23() {
  return <div className="absolute bg-[#00c853] h-0 left-0 top-[24px] w-[4px]" data-name="Container" />;
}

function TableCell20() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[4px]" data-name="Table Cell">
      <Container23 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[18px] relative shrink-0 w-[137.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#e0e0e0] text-[12px] top-0">Sistema de Gestión SST</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center left-[48px] top-[15px] w-[541.484px]" data-name="Container">
      <Text5 />
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[48px] left-[4px] top-0 w-[605.484px]" data-name="Table Cell">
      <Container24 />
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[48px] left-[609.48px] top-0 w-[150px]" data-name="Table Cell">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] left-[16px] text-[#00c853] text-[11px] top-[16px]">Act. 15 Nov 2026</p>
    </div>
  );
}

function TableCell23() {
  return <div className="absolute h-[48px] left-[759.48px] top-0 w-[200px]" data-name="Table Cell" />;
}

function TableRow5() {
  return (
    <div className="absolute border-[#1a1a1a] border-b border-solid h-[48px] left-0 top-[240px] w-[959.484px]" data-name="Table Row">
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
    </div>
  );
}

function Container25() {
  return <div className="absolute bg-[#00c853] h-0 left-0 top-[24px] w-[4px]" data-name="Container" />;
}

function TableCell24() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[4px]" data-name="Table Cell">
      <Container25 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[18px] relative shrink-0 w-[108.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#e0e0e0] text-[12px] top-0">Licencia Ambiental</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center left-[48px] top-[15px] w-[541.484px]" data-name="Container">
      <Text6 />
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[48px] left-[4px] top-0 w-[605.484px]" data-name="Table Cell">
      <Container26 />
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[48px] left-[609.48px] top-0 w-[150px]" data-name="Table Cell">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] left-[16px] text-[#00c853] text-[11px] top-[16px]">Act. 10 Nov 2026</p>
    </div>
  );
}

function TableCell27() {
  return <div className="absolute h-[48px] left-[759.48px] top-0 w-[200px]" data-name="Table Cell" />;
}

function TableRow6() {
  return (
    <div className="absolute border-[#1a1a1a] border-b border-solid h-[48px] left-0 top-[288px] w-[959.484px]" data-name="Table Row">
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
    </div>
  );
}

function Container27() {
  return <div className="absolute bg-[#00c853] h-0 left-0 top-[24px] w-[4px]" data-name="Container" />;
}

function TableCell28() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[4px]" data-name="Table Cell">
      <Container27 />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[18px] relative shrink-0 w-[149.719px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#e0e0e0] text-[12px] top-0">Certificado RETIE Equipos</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex h-[18px] items-center left-[48px] top-[15px] w-[541.484px]" data-name="Container">
      <Text7 />
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[48px] left-[4px] top-0 w-[605.484px]" data-name="Table Cell">
      <Container28 />
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[48px] left-[609.48px] top-0 w-[150px]" data-name="Table Cell">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] left-[16px] text-[#00c853] text-[11px] top-[16px]">Act. 20 Nov 2026</p>
    </div>
  );
}

function TableCell31() {
  return <div className="absolute h-[48px] left-[759.48px] top-0 w-[200px]" data-name="Table Cell" />;
}

function TableRow7() {
  return (
    <div className="absolute border-[#1a1a1a] border-b border-solid h-[48px] left-0 top-[336px] w-[959.484px]" data-name="Table Row">
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[384px] left-0 top-[39.5px] w-[959.484px]" data-name="Table Body">
      <TableRow />
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
      <TableRow6 />
      <TableRow7 />
    </div>
  );
}

function Table() {
  return (
    <div className="absolute h-[424px] left-0 top-0 w-[959.484px]" data-name="Table">
      <TableBody />
    </div>
  );
}

function HeaderCell() {
  return <div className="absolute h-[39.5px] left-0 top-0 w-[4px]" data-name="Header Cell" />;
}

function HeaderCell1() {
  return (
    <div className="absolute h-[39.5px] left-[4px] top-0 w-[605.484px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-[48px] not-italic text-[#606060] text-[10px] top-[12px] uppercase">Document</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute h-[39.5px] left-[609.48px] top-0 w-[150px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-[16px] not-italic text-[#606060] text-[10px] top-[12px] uppercase">Status</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute h-[39.5px] left-[759.48px] top-0 w-[200px]" data-name="Header Cell">
      <p className="-translate-x-full absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-[152.98px] not-italic text-[#606060] text-[10px] text-right top-[12px] uppercase">Admin Actions</p>
    </div>
  );
}

function TableRow8() {
  return (
    <div className="absolute border-[#333] border-b border-solid h-[39.5px] left-0 top-0 w-[959.484px]" data-name="Table Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute bg-[#050505] h-[39.5px] left-0 top-0 w-[959.484px]" data-name="Table Header">
      <TableRow8 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[424px] left-0 overflow-clip top-[458.28px] w-[959.484px]" data-name="Container">
      <Table />
      <TableHeader />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[180px] left-0 opacity-20 top-0 w-[959.484px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer} />
    </div>
  );
}

function Container32() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[180px] left-0 to-[#050505] top-0 w-[959.484px]" data-name="Container" />;
}

function Container30() {
  return (
    <div className="absolute h-[180px] left-0 overflow-clip top-0 w-[959.484px]" data-name="Container" style={{ backgroundImage: "linear-gradient(169.375deg, rgb(26, 26, 26) 0%, rgb(10, 10, 10) 100%)" }}>
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[72px] relative shrink-0 w-[64.672px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[72px] left-0 not-italic text-[#1d99cc] text-[48px] top-[-1px]">CE</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute bg-[#121212] content-stretch flex items-center justify-center left-[48px] pl-[2px] pr-[2.016px] py-[2px] rounded-[8px] size-[120px] top-[100px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#1d99cc] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.5)]" />
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16.5px] left-0 not-italic text-[#1d99cc] text-[11px] top-0 tracking-[0.5px] uppercase">🔒 Modo Admin - Edit Enabled</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bg-[rgba(29,153,204,0.2)] content-stretch flex flex-col h-[30.5px] items-start left-[713.22px] pb-px pt-[7px] px-[13px] rounded-[3px] top-[12px] w-[222.266px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#1d99cc] border-solid inset-0 pointer-events-none rounded-[3px] shadow-[0px_0px_20px_0px_rgba(29,153,204,0.3)]" />
      <Container36 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[180px] left-0 top-[50px] w-[959.484px]" data-name="Container">
      <Container30 />
      <Container33 />
      <Container35 />
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] h-[882.281px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container2 />
        <Container3 />
        <Container8 />
        <Container12 />
        <Container29 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[18px] left-0 not-italic text-[#1d99cc] text-[12px] top-0 tracking-[0.5px] uppercase">📊 Global Stats</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#606060] text-[9px] top-0 tracking-[0.5px] uppercase">MGS Totales</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#1d99cc] text-[28px] top-0">5</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[47.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#606060] text-[9px] top-0 tracking-[0.5px] uppercase">MGS Activas</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#00c853] text-[28px] top-0">2</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[47.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <Container46 />
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#606060] text-[9px] top-0 tracking-[0.5px] uppercase">Eficiencia de Entrega</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[33.609px]" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[28px] left-0 text-[#e0e0e0] text-[28px] top-0">94</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute h-[24px] left-[36.61px] top-[2px] w-[9.609px]" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[24px] left-0 text-[#808080] text-[16px] top-[-1px]">%</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <Container50 />
      <Container51 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[47.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container48 />
      <Container49 />
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#808080] text-[9px] top-0 tracking-[0.5px] uppercase">Global Score</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[43.203px]" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[36px] left-0 text-[#1d99cc] text-[36px] top-0">88</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute h-[30px] left-[46.2px] top-[2px] w-[48px]" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[30px] left-0 text-[#606060] text-[20px] top-0">/100</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Container55 />
      <Container56 />
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#808080] text-[9px] top-0">Calculado desde todos los documentos auditados</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-[rgba(29,153,204,0.1)] h-[97px] relative rounded-[3px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#1d99cc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-px pt-[10px] px-[10px] relative size-full">
        <Container53 />
        <Container54 />
        <Container57 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[275.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Container44 />
      <Container47 />
      <Container52 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[340.5px] relative shrink-0 w-[279px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-px pt-[15px] px-[15px] relative size-full">
        <Container39 />
        <Container40 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[#b0b0b0] text-[12px] top-0">Información Técnica</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#606060] text-[10px] top-0 uppercase">NIT</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] left-0 text-[#d0d0d0] text-[12px] top-0">900.XXX.XXX</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[37px] items-start relative shrink-0 w-full" data-name="Container">
      <Container62 />
      <Container63 />
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#606060] text-[10px] top-0 uppercase">Representante Legal</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#d0d0d0] text-[12px] top-0">Juan Pérez</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[37px] items-start relative shrink-0 w-full" data-name="Container">
      <Container65 />
      <Container66 />
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#606060] text-[10px] top-0 uppercase">Ubicación</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-0 not-italic text-[#d0d0d0] text-[12px] top-0">Medellín, ANT</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[37px] items-start relative shrink-0 w-full" data-name="Container">
      <Container68 />
      <Container69 />
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#606060] text-[10px] top-0 uppercase">Personal Activo</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] left-0 text-[#d0d0d0] text-[12px] top-0">24 Operarios</p>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[37px] items-start relative shrink-0 w-full" data-name="Container">
      <Container71 />
      <Container72 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[184px] items-start relative shrink-0 w-full" data-name="Container">
      <Container61 />
      <Container64 />
      <Container67 />
      <Container70 />
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[248px] relative shrink-0 w-[279px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pt-[15px] px-[15px] relative size-full">
        <Container59 />
        <Container60 />
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[#b0b0b0] text-[12px] top-0">Estado de Documentos</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[45.625px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#808080] text-[11px] top-0">Vigentes</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[21px] relative shrink-0 w-[8.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#00c853] text-[14px] top-[-1px]">6</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex h-[21px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text8 />
      <Text9 />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[97.188px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#808080] text-[11px] top-0">Próximos a Vencer</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[21px] relative shrink-0 w-[8.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#ff9800] text-[14px] top-[-1px]">1</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex h-[21px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[48.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#808080] text-[11px] top-0">Vencidos</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[21px] relative shrink-0 w-[8.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#ff4d4d] text-[14px] top-[-1px]">1</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex h-[21px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text12 />
      <Text13 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] h-[81px] items-start relative shrink-0 w-full" data-name="Container">
      <Container76 />
      <Container77 />
      <Container78 />
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[145px] relative shrink-0 w-[279px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pt-[15px] px-[15px] relative size-full">
        <Container74 />
        <Container75 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-[#0a0a0a] h-[882.281px] relative shrink-0 w-[280px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#333] border-l border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-px relative size-full">
        <Container38 />
        <Container58 />
        <Container73 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] h-[882.281px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Container1 />
        <Container37 />
      </div>
    </div>
  );
}

function PK() {
  return (
    <div className="bg-[#050505] h-[882.281px] relative shrink-0 w-full" data-name="pK">
      <div className="content-stretch flex items-start pl-[220px] pr-[-110.484px] relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-[#080808] content-stretch flex flex-col h-[617px] items-start left-0 top-0 w-[1349px]" data-name="Body">
      <PK />
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[27px] relative shrink-0 w-[103.484px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[#1d99cc] text-[18px] top-px tracking-[1px]">SOLENIUM</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="bg-[rgba(29,153,204,0.15)] h-[19.5px] relative rounded-[3px] shrink-0 w-[45.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[13.5px] left-[6px] not-italic text-[#1d99cc] text-[9px] top-[3px] tracking-[0.5px]">ADMIN</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[72px] relative shrink-0 w-[239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center justify-center pb-px pr-[0.016px] relative size-full">
        <Container81 />
        <Container82 />
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute h-[15px] left-0 top-0 w-[215px]" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-[12px] not-italic text-[#808080] text-[10px] top-0 tracking-[1px]">GESTIÓN</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[9px] size-[16px] top-[8.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pff0fc00} id="Vector" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d76d410} id="Vector_2" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2f091200} id="Vector_3" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39897300} id="Vector_4" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[35px] left-0 rounded-[3px] top-[27px] w-[215px]" data-name="Link">
      <Icon3 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[34px] not-italic text-[#808080] text-[12px] top-[7.5px]">Dashboard</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[9px] size-[16px] top-[8.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[35px] left-0 rounded-[3px] top-[65px] w-[215px]" data-name="Link">
      <Icon4 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[34px] not-italic text-[#808080] text-[12px] top-[7.5px]">Crear Pliego</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[9px] size-[16px] top-[8.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f197700} id="Vector_3" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3bf3e100} id="Vector_4" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute border border-[rgba(0,0,0,0)] border-solid h-[35px] left-0 rounded-[3px] top-[103px] w-[215px]" data-name="Link">
      <Icon5 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[34px] not-italic text-[#808080] text-[12px] top-[7.5px]">Partners</p>
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[138px] relative shrink-0 w-full" data-name="Container">
      <Container84 />
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[239px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pt-[18px] px-[12px] relative rounded-[inherit] size-full">
        <Container83 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_101_326)" id="Icon">
          <path d={svgPaths.p24da2380} id="Vector" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 1.16667V2.33333" id="Vector_2" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M7 11.6667V12.8333" id="Vector_3" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p37111300} id="Vector_4" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p9000440} id="Vector_5" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M1.16667 7H2.33333" id="Vector_6" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M11.6667 7H12.8333" id="Vector_7" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p9ee27e0} id="Vector_8" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.pe9da980} id="Vector_9" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_101_326">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p3283c680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#1d99cc] flex-[1_0_0] h-[28px] min-h-px min-w-px relative rounded-[33554400px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="bg-[#1a1a1a] h-[36px] relative rounded-[33554400px] shrink-0 w-[67px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3px] items-center px-[4px] py-px relative size-full">
        <Button9 />
        <Button10 />
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex h-[36px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container87 />
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[18px] relative shrink-0 w-[63.813px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[12px] text-white top-0">Admin SST</p>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex h-[18px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container90 />
      <Icon8 />
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[19.266px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#808080] text-[9px] top-0 tracking-[0.5px] uppercase">Rol</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[19.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[16.5px] left-0 text-[#1d99cc] text-[11px] top-0">SST</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex h-[16.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text14 />
      <Text15 />
    </div>
  );
}

function Container88() {
  return (
    <div className="bg-[#121212] h-[60.5px] relative rounded-[3px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pb-px pt-[10px] px-[13px] relative size-full">
        <Container89 />
        <Container91 />
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[30.5px] relative rounded-[3px] shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[107.45px] not-italic text-[#808080] text-[11px] text-center top-[7px]">Cerrar Sesión</p>
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[170px] relative shrink-0 w-[239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[9px] items-start pt-[13px] px-[12px] relative size-full">
        <Container86 />
        <Container88 />
        <Link3 />
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute bg-[#0a0a0a] content-stretch flex flex-col h-[632px] items-start left-0 pr-px top-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-r border-solid inset-0 pointer-events-none" />
      <Container80 />
      <Navigation />
      <Container85 />
    </div>
  );
}

export default function SetupSoleniumSolarversoSystem() {
  return (
    <div className="bg-white relative size-full" data-name="Setup Solenium Solarverso System">
      <Body />
      <Container79 />
    </div>
  );
}