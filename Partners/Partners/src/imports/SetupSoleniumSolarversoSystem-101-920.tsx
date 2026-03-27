import svgPaths from "./svg-ujibdgwfju";

function Heading() {
  return (
    <div className="h-[23.391px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[23.4px] left-0 not-italic text-[18px] text-white top-px">Directorio de Partners</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#808080] text-[11px] top-0">8 partners activos en el ecosistema</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[66.891px] relative shrink-0 w-[1109px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start pb-px pt-[12px] px-[24px] relative size-full">
        <Heading />
        <Container2 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function TextInput() {
  return (
    <div className="flex-[1_0_0] h-[18.188px] min-h-px min-w-px relative" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[13px] text-[rgba(176,176,176,0.5)]">Buscar por NIT o Nombre...</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#121212] h-[35.188px] relative rounded-[3px] shrink-0 w-[400px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9px] items-center px-[13px] py-px relative size-full">
        <Icon />
        <TextInput />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[18px] relative shrink-0 w-[70.25px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#b0b0b0] text-[12px] top-0">8 resultados</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[35.188px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[12px] left-[18px] not-italic text-[#1d99cc] text-[12px] text-center top-0">Todos</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#1d99cc] h-[13px] relative rounded-[3px] shrink-0 w-[15px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[10px] left-[7.5px] text-[10px] text-center text-white top-[0.5px]">8</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(29,153,204,0.15)] h-[27px] relative rounded-[3px] shrink-0 w-[82.688px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#1d99cc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[13px] py-px relative size-full">
        <Text />
        <Text1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[12px] relative shrink-0 w-[16.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[12px] left-[8px] not-italic text-[#808080] text-[12px] text-center top-0">⚡</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[12px] left-[29px] not-italic text-[#808080] text-[12px] text-center top-0">Eléctricos</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[#0a0a0a] h-[13px] relative rounded-[3px] shrink-0 w-[15px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[10px] left-[7.5px] text-[#606060] text-[10px] text-center top-[0.5px]">4</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#1a1a1a] h-[27px] relative rounded-[3px] shrink-0 w-[127.094px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[13px] py-px relative size-full">
        <Text2 />
        <Text3 />
        <Text4 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[12px] relative shrink-0 w-[16.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[12px] left-[8px] not-italic text-[#808080] text-[12px] text-center top-0">🏗️</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[12px] left-[19.5px] not-italic text-[#808080] text-[12px] text-center top-0">Civiles</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="bg-[#0a0a0a] h-[13px] relative rounded-[3px] shrink-0 w-[15px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[10px] left-[7.5px] text-[#606060] text-[10px] text-center top-[0.5px]">4</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#1a1a1a] h-[27px] relative rounded-[3px] shrink-0 w-[108.484px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[13px] py-px relative size-full">
        <Text5 />
        <Text6 />
        <Text7 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[12px] relative shrink-0 w-[16.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[12px] left-[8.5px] not-italic text-[#808080] text-[12px] text-center top-0">⚠️</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="flex-[1_0_0] h-[12px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[12px] left-[65.5px] not-italic text-[#808080] text-[12px] text-center top-0">Documentos Vencidos</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="bg-[#0a0a0a] h-[13px] relative rounded-[3px] shrink-0 w-[15px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[10px] left-[7.5px] text-[#606060] text-[10px] text-center top-[0.5px]">2</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#1a1a1a] h-[27px] relative rounded-[3px] shrink-0 w-[200.078px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[13px] py-px relative size-full">
        <Text8 />
        <Text9 />
        <Text10 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[6px] h-[27px] items-center relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[105.188px] relative shrink-0 w-[1109px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pb-px pt-[15px] px-[24px] relative size-full">
        <Container4 />
        <Container7 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#121212] relative rounded-[3px] shrink-0 size-[56px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[27px] not-italic relative shrink-0 text-[#1d99cc] text-[18px]">CE</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[21px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-0 not-italic text-[14px] text-white top-0">Construcciones Eléctricas SAS</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] left-0 text-[#808080] text-[11px] top-0">NIT: 900.123.456</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[1_0_0] h-[40.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[9px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[rgba(0,200,83,0.12)] h-[21px] relative rounded-[3px] shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[15px] left-[6px] text-[#00c853] text-[10px] top-[3px]">SST: 86%</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[rgba(29,153,204,0.12)] h-[21px] relative rounded-[3px] shrink-0 w-[42.875px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-[6px] not-italic text-[#1d99cc] text-[10px] top-[3px]">Activo</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[6px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2023d200} id="Vector" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p2d617c80} id="Vector_2" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[73.234px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#b0b0b0] text-[11px] top-0">Medellín, ANT</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[6px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon1 />
      <Text11 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#808080] text-[10px] top-0 uppercase">MGS Asignadas (2)</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bg-[#1a1a1a] border border-[rgba(255,255,255,0.05)] border-solid h-[23px] left-0 rounded-[3px] top-0 w-[74px]" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[15px] left-[6px] text-[#2e7d32] text-[10px] top-[3px]">MGS-BOY-01</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bg-[#1a1a1a] border border-[rgba(255,255,255,0.05)] border-solid h-[23px] left-[78.5px] rounded-[3px] top-0 w-[74px]" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[15px] left-[6px] text-[#2e7d32] text-[10px] top-[3px]">MGS-MET-02</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[23px] relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[44px] items-start relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[86.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#808080] text-[11px] top-0">Personal en Sitio</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[21px] relative shrink-0 w-[16.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#b0b0b0] text-[14px] top-[-1px]">24</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex h-[21px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text12 />
      <Text13 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[242.5px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start pt-[15px] px-[15px] relative size-full">
        <Container12 />
        <Container17 />
        <Container20 />
        <Container21 />
        <Container26 />
      </div>
    </div>
  );
}

function Container30() {
  return <div className="bg-[#ff9800] rounded-[33554400px] shadow-[0px_0px_8px_0px_#ff9800] shrink-0 size-[6px]" data-name="Container" />;
}

function Text14() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[#ff9800] text-[11px] top-0">Atención</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[59.469px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Container30 />
        <Text14 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.pbb9d080} id="Vector" stroke="var(--stroke-0, #FF5252)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 4.5V6.5" id="Vector_2" stroke="var(--stroke-0, #FF5252)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 8.5H6.005" id="Vector_3" stroke="var(--stroke-0, #FF5252)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div className="flex-[1_0_0] h-[15px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-0 not-italic text-[#ff5252] text-[10px] top-0">2 vencidos</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[15px] relative shrink-0 w-[69.25px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4.5px] items-center relative size-full">
        <Icon2 />
        <Text15 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex h-[16.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container31 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[98.61px] size-[14px] top-[8.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.pd1f0180} id="Vector" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p1c197ec0} id="Vector_2" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M5.83333 5.25H4.66667" id="Vector_3" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 7.58333H4.66667" id="Vector_4" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 9.91667H4.66667" id="Vector_5" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[201.03px] size-[12px] top-[9.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M7.5 1.5H10.5V4.5" id="Vector" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 7L10.5 1.5" id="Vector_2" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc1a2200} id="Vector_3" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#1a1a1a] h-[31px] relative rounded-[3px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#1d99cc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Icon3 />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[12px] left-[157.11px] not-italic text-[#1d99cc] text-[12px] text-center top-[9.5px]">Auditar Perfil</p>
      <Icon4 />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[81.5px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[9px] items-start pt-[13px] px-[15px] relative size-full">
        <Container28 />
        <Button4 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[#121212] content-stretch flex flex-col h-[326px] items-start left-0 p-px rounded-[3px] top-0 w-[343.656px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[3px] shadow-[0px_0px_20px_0px_rgba(29,153,204,0.2)]" />
      <Container11 />
      <Container27 />
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#121212] relative rounded-[3px] shrink-0 size-[56px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[27px] not-italic relative shrink-0 text-[#1d99cc] text-[18px]">IS</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[21px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-0 not-italic text-[14px] text-white top-0">Inversiones Solares SAS</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] left-0 text-[#808080] text-[11px] top-0">NIT: 900.234.567</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="flex-[1_0_0] h-[40.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
        <Container37 />
        <Container38 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[9px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Container36 />
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-[rgba(0,200,83,0.12)] h-[21px] relative rounded-[3px] shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[15px] left-[6px] text-[#00c853] text-[10px] top-[3px]">SST: 92%</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-[rgba(29,153,204,0.12)] h-[21px] relative rounded-[3px] shrink-0 w-[42.875px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-[6px] not-italic text-[#1d99cc] text-[10px] top-[3px]">Activo</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-[6px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2023d200} id="Vector" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p2d617c80} id="Vector_2" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[59.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#b0b0b0] text-[11px] top-0">Bogotá, DC</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[6px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon5 />
      <Text16 />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#808080] text-[10px] top-0 uppercase">MGS Asignadas (1)</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bg-[#1a1a1a] border border-[rgba(255,255,255,0.05)] border-solid h-[23px] left-0 rounded-[3px] top-0 w-[74px]" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[15px] left-[6px] text-[#2e7d32] text-[10px] top-[3px]">MGS-CUN-03</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[23px] relative shrink-0 w-full" data-name="Container">
      <Container46 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[44px] items-start relative shrink-0 w-full" data-name="Container">
      <Container44 />
      <Container45 />
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[86.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#808080] text-[11px] top-0">Personal en Sitio</p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[21px] relative shrink-0 w-[16.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#b0b0b0] text-[14px] top-[-1px]">18</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex h-[21px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text17 />
      <Text18 />
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[242.5px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start pt-[15px] px-[15px] relative size-full">
        <Container34 />
        <Container39 />
        <Container42 />
        <Container43 />
        <Container47 />
      </div>
    </div>
  );
}

function Container51() {
  return <div className="bg-[#00c853] rounded-[33554400px] shadow-[0px_0px_8px_0px_#00c853] shrink-0 size-[6px]" data-name="Container" />;
}

function Text19() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[#00c853] text-[11px] top-0">Completo</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[63.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Container51 />
        <Text19 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[248.234px] relative size-full">
          <Container50 />
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[98.63px] size-[14px] top-[8.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.pd1f0180} id="Vector" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p1c197ec0} id="Vector_2" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M5.83333 5.25H4.66667" id="Vector_3" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 7.58333H4.66667" id="Vector_4" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 9.91667H4.66667" id="Vector_5" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[201.05px] size-[12px] top-[9.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M7.5 1.5H10.5V4.5" id="Vector" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 7L10.5 1.5" id="Vector_2" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc1a2200} id="Vector_3" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#1a1a1a] h-[31px] relative rounded-[3px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#1d99cc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Icon6 />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[12px] left-[157.13px] not-italic text-[#1d99cc] text-[12px] text-center top-[9.5px]">Auditar Perfil</p>
      <Icon7 />
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[81.5px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[9px] items-start pt-[13px] px-[15px] relative size-full">
        <Container49 />
        <Button5 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-[#121212] content-stretch flex flex-col h-[326px] items-start left-[358.66px] p-px rounded-[3px] top-0 w-[343.672px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[3px] shadow-[0px_0px_20px_0px_rgba(29,153,204,0.2)]" />
      <Container33 />
      <Container48 />
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-[#121212] relative rounded-[3px] shrink-0 size-[56px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[27px] not-italic relative shrink-0 text-[#1d99cc] text-[18px]">ON</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[21px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-0 not-italic text-[14px] text-white top-0">Obras Civiles del Norte</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] left-0 text-[#808080] text-[11px] top-0">NIT: 900.345.678</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="flex-[1_0_0] h-[40.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
        <Container57 />
        <Container58 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex gap-[9px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container55 />
      <Container56 />
    </div>
  );
}

function Container60() {
  return (
    <div className="bg-[rgba(0,200,83,0.12)] h-[21px] relative rounded-[3px] shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[15px] left-[6px] text-[#00c853] text-[10px] top-[3px]">SST: 78%</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="bg-[rgba(29,153,204,0.12)] h-[21px] relative rounded-[3px] shrink-0 w-[42.875px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-[6px] not-italic text-[#1d99cc] text-[10px] top-[3px]">Activo</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex gap-[6px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Container60 />
      <Container61 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2023d200} id="Vector" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p2d617c80} id="Vector_2" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[101.031px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#b0b0b0] text-[11px] top-0">Bucaramanga, SAN</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex gap-[6px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon8 />
      <Text20 />
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#808080] text-[10px] top-0 uppercase">MGS Asignadas (2)</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute bg-[#1a1a1a] border border-[rgba(255,255,255,0.05)] border-solid h-[23px] left-0 rounded-[3px] top-0 w-[74px]" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[15px] left-[6px] text-[#2e7d32] text-[10px] top-[3px]">MGS-SAN-02</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute bg-[#1a1a1a] border border-[rgba(255,255,255,0.05)] border-solid h-[23px] left-[78.5px] rounded-[3px] top-0 w-[74px]" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[15px] left-[6px] text-[#2e7d32] text-[10px] top-[3px]">MGS-ANT-04</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[23px] relative shrink-0 w-full" data-name="Container">
      <Container66 />
      <Container67 />
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[44px] items-start relative shrink-0 w-full" data-name="Container">
      <Container64 />
      <Container65 />
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[86.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#808080] text-[11px] top-0">Personal en Sitio</p>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[21px] relative shrink-0 w-[16.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#b0b0b0] text-[14px] top-[-1px]">32</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex h-[21px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text21 />
      <Text22 />
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[242.5px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start pt-[15px] px-[15px] relative size-full">
        <Container54 />
        <Container59 />
        <Container62 />
        <Container63 />
        <Container68 />
      </div>
    </div>
  );
}

function Container72() {
  return <div className="bg-[#ff5252] rounded-[33554400px] shadow-[0px_0px_8px_0px_#ff5252] shrink-0 size-[6px]" data-name="Container" />;
}

function Text23() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[#ff5252] text-[11px] top-0">Crítico</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[47.297px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Container72 />
        <Text23 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.pbb9d080} id="Vector" stroke="var(--stroke-0, #FF5252)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 4.5V6.5" id="Vector_2" stroke="var(--stroke-0, #FF5252)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 8.5H6.005" id="Vector_3" stroke="var(--stroke-0, #FF5252)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text24() {
  return (
    <div className="flex-[1_0_0] h-[15px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-0 not-italic text-[#ff5252] text-[10px] top-0">5 vencidos</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[15px] relative shrink-0 w-[69.141px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4.5px] items-center relative size-full">
        <Icon9 />
        <Text24 />
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex h-[16.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container71 />
      <Container73 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[98.61px] size-[14px] top-[8.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.pd1f0180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p1c197ec0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M5.83333 5.25H4.66667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 7.58333H4.66667" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 9.91667H4.66667" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[201.03px] size-[12px] top-[9.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M7.5 1.5H10.5V4.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 7L10.5 1.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc1a2200} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#ff5252] h-[31px] relative rounded-[3px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ff5252] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Icon10 />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[12px] left-[157.11px] not-italic text-[12px] text-center text-white top-[9.5px]">Auditar Perfil</p>
      <Icon11 />
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[81.5px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[9px] items-start pt-[13px] px-[15px] relative size-full">
        <Container70 />
        <Button6 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute bg-[#121212] content-stretch flex flex-col h-[326px] items-start left-[717.33px] p-px rounded-[3px] top-0 w-[343.656px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ff5252] border-solid inset-0 pointer-events-none rounded-[3px] shadow-[0px_0px_20px_0px_rgba(255,82,82,0.12)]" />
      <Container53 />
      <Container69 />
    </div>
  );
}

function Container77() {
  return (
    <div className="bg-[#121212] relative rounded-[3px] shrink-0 size-[56px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[27px] not-italic relative shrink-0 text-[#1d99cc] text-[18px]">ME</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[21px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-0 not-italic text-[14px] text-white top-0">Montajes Eléctricos LTDA</p>
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] left-0 text-[#808080] text-[11px] top-0">NIT: 900.456.789</p>
    </div>
  );
}

function Container78() {
  return (
    <div className="flex-[1_0_0] h-[40.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
        <Container79 />
        <Container80 />
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex gap-[9px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container77 />
      <Container78 />
    </div>
  );
}

function Container82() {
  return (
    <div className="bg-[rgba(0,200,83,0.12)] h-[21px] relative rounded-[3px] shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[15px] left-[6px] text-[#00c853] text-[10px] top-[3px]">SST: 95%</p>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="bg-[rgba(29,153,204,0.12)] h-[21px] relative rounded-[3px] shrink-0 w-[42.875px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-[6px] not-italic text-[#1d99cc] text-[10px] top-[3px]">Activo</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex gap-[6px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Container82 />
      <Container83 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2023d200} id="Vector" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p2d617c80} id="Vector_2" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[55.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#b0b0b0] text-[11px] top-0">Neiva, HUI</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex gap-[6px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon12 />
      <Text25 />
    </div>
  );
}

function Container86() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#808080] text-[10px] top-0 uppercase">MGS Asignadas (1)</p>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute bg-[#1a1a1a] border border-[rgba(255,255,255,0.05)] border-solid h-[23px] left-0 rounded-[3px] top-0 w-[74px]" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[15px] left-[6px] text-[#2e7d32] text-[10px] top-[3px]">MGS-HUI-01</p>
    </div>
  );
}

function Container87() {
  return (
    <div className="h-[23px] relative shrink-0 w-full" data-name="Container">
      <Container88 />
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[44px] items-start relative shrink-0 w-full" data-name="Container">
      <Container86 />
      <Container87 />
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[86.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#808080] text-[11px] top-0">Personal en Sitio</p>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[21px] relative shrink-0 w-[16.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#b0b0b0] text-[14px] top-[-1px]">15</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex h-[21px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text26 />
      <Text27 />
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[242.5px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start pt-[15px] px-[15px] relative size-full">
        <Container76 />
        <Container81 />
        <Container84 />
        <Container85 />
        <Container89 />
      </div>
    </div>
  );
}

function Container93() {
  return <div className="bg-[#00c853] rounded-[33554400px] shadow-[0px_0px_8px_0px_#00c853] shrink-0 size-[6px]" data-name="Container" />;
}

function Text28() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[#00c853] text-[11px] top-0">Completo</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[63.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Container93 />
        <Text28 />
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[248.219px] relative size-full">
          <Container92 />
        </div>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[98.61px] size-[14px] top-[8.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.pd1f0180} id="Vector" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p1c197ec0} id="Vector_2" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M5.83333 5.25H4.66667" id="Vector_3" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 7.58333H4.66667" id="Vector_4" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 9.91667H4.66667" id="Vector_5" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[201.03px] size-[12px] top-[9.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M7.5 1.5H10.5V4.5" id="Vector" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 7L10.5 1.5" id="Vector_2" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc1a2200} id="Vector_3" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#1a1a1a] h-[31px] relative rounded-[3px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#1d99cc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Icon13 />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[12px] left-[157.11px] not-italic text-[#1d99cc] text-[12px] text-center top-[9.5px]">Auditar Perfil</p>
      <Icon14 />
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[81.5px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[9px] items-start pt-[13px] px-[15px] relative size-full">
        <Container91 />
        <Button7 />
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute bg-[#121212] content-stretch flex flex-col h-[326px] items-start left-0 p-px rounded-[3px] top-[341px] w-[343.656px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[3px] shadow-[0px_0px_20px_0px_rgba(29,153,204,0.2)]" />
      <Container75 />
      <Container90 />
    </div>
  );
}

function Container97() {
  return (
    <div className="bg-[#121212] relative rounded-[3px] shrink-0 size-[56px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[27px] not-italic relative shrink-0 text-[#1d99cc] text-[18px]">CC</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="h-[21px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-0 not-italic text-[14px] text-white top-0">Constructora del Caribe</p>
    </div>
  );
}

function Container100() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] left-0 text-[#808080] text-[11px] top-0">NIT: 900.567.890</p>
    </div>
  );
}

function Container98() {
  return (
    <div className="flex-[1_0_0] h-[40.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
        <Container99 />
        <Container100 />
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex gap-[9px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container97 />
      <Container98 />
    </div>
  );
}

function Container102() {
  return (
    <div className="bg-[rgba(0,200,83,0.12)] h-[21px] relative rounded-[3px] shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[15px] left-[6px] text-[#00c853] text-[10px] top-[3px]">SST: 88%</p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="bg-[rgba(29,153,204,0.12)] h-[21px] relative rounded-[3px] shrink-0 w-[42.875px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-[6px] not-italic text-[#1d99cc] text-[10px] top-[3px]">Activo</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex gap-[6px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Container102 />
      <Container103 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2023d200} id="Vector" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p2d617c80} id="Vector_2" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[88.156px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#b0b0b0] text-[11px] top-0">Barranquilla, ATL</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex gap-[6px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon15 />
      <Text29 />
    </div>
  );
}

function Container106() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#808080] text-[10px] top-0 uppercase">MGS Asignadas (2)</p>
    </div>
  );
}

function Container108() {
  return (
    <div className="absolute bg-[#1a1a1a] border border-[rgba(255,255,255,0.05)] border-solid h-[23px] left-0 rounded-[3px] top-0 w-[74px]" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[15px] left-[6px] text-[#2e7d32] text-[10px] top-[3px]">MGS-ATL-01</p>
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute bg-[#1a1a1a] border border-[rgba(255,255,255,0.05)] border-solid h-[23px] left-[78.5px] rounded-[3px] top-0 w-[74px]" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[15px] left-[6px] text-[#2e7d32] text-[10px] top-[3px]">MGS-BOL-02</p>
    </div>
  );
}

function Container107() {
  return (
    <div className="h-[23px] relative shrink-0 w-full" data-name="Container">
      <Container108 />
      <Container109 />
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[44px] items-start relative shrink-0 w-full" data-name="Container">
      <Container106 />
      <Container107 />
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[86.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#808080] text-[11px] top-0">Personal en Sitio</p>
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[21px] relative shrink-0 w-[16.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#b0b0b0] text-[14px] top-[-1px]">28</p>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex h-[21px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text30 />
      <Text31 />
    </div>
  );
}

function Container95() {
  return (
    <div className="h-[242.5px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start pt-[15px] px-[15px] relative size-full">
        <Container96 />
        <Container101 />
        <Container104 />
        <Container105 />
        <Container110 />
      </div>
    </div>
  );
}

function Container114() {
  return <div className="bg-[#ff9800] rounded-[33554400px] shadow-[0px_0px_8px_0px_#ff9800] shrink-0 size-[6px]" data-name="Container" />;
}

function Text32() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[#ff9800] text-[11px] top-0">Atención</p>
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[59.469px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Container114 />
        <Text32 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.pbb9d080} id="Vector" stroke="var(--stroke-0, #FF5252)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 4.5V6.5" id="Vector_2" stroke="var(--stroke-0, #FF5252)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 8.5H6.005" id="Vector_3" stroke="var(--stroke-0, #FF5252)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text33() {
  return (
    <div className="flex-[1_0_0] h-[15px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-0 not-italic text-[#ff5252] text-[10px] top-0">1 vencido</p>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="h-[15px] relative shrink-0 w-[61.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4.5px] items-center relative size-full">
        <Icon16 />
        <Text33 />
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex h-[16.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container113 />
      <Container115 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-[98.63px] size-[14px] top-[8.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.pd1f0180} id="Vector" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p1c197ec0} id="Vector_2" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M5.83333 5.25H4.66667" id="Vector_3" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 7.58333H4.66667" id="Vector_4" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 9.91667H4.66667" id="Vector_5" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-[201.05px] size-[12px] top-[9.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M7.5 1.5H10.5V4.5" id="Vector" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 7L10.5 1.5" id="Vector_2" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc1a2200} id="Vector_3" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#1a1a1a] h-[31px] relative rounded-[3px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#1d99cc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Icon17 />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[12px] left-[157.13px] not-italic text-[#1d99cc] text-[12px] text-center top-[9.5px]">Auditar Perfil</p>
      <Icon18 />
    </div>
  );
}

function Container111() {
  return (
    <div className="h-[81.5px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[9px] items-start pt-[13px] px-[15px] relative size-full">
        <Container112 />
        <Button8 />
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute bg-[#121212] content-stretch flex flex-col h-[326px] items-start left-[358.66px] p-px rounded-[3px] top-[341px] w-[343.672px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[3px] shadow-[0px_0px_20px_0px_rgba(29,153,204,0.2)]" />
      <Container95 />
      <Container111 />
    </div>
  );
}

function Container119() {
  return (
    <div className="bg-[#121212] relative rounded-[3px] shrink-0 size-[56px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[27px] not-italic relative shrink-0 text-[#1d99cc] text-[18px]">SB</p>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="h-[21px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-0 not-italic text-[14px] text-white top-0">Solar Build Co.</p>
    </div>
  );
}

function Container122() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] left-0 text-[#808080] text-[11px] top-0">NIT: 900.678.901</p>
    </div>
  );
}

function Container120() {
  return (
    <div className="flex-[1_0_0] h-[40.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
        <Container121 />
        <Container122 />
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex gap-[9px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container119 />
      <Container120 />
    </div>
  );
}

function Container124() {
  return (
    <div className="bg-[rgba(0,200,83,0.12)] h-[21px] relative rounded-[3px] shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[15px] left-[6px] text-[#00c853] text-[10px] top-[3px]">SST: 71%</p>
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="bg-[rgba(29,153,204,0.12)] h-[21px] relative rounded-[3px] shrink-0 w-[42.875px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-[6px] not-italic text-[#1d99cc] text-[10px] top-[3px]">Activo</p>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex gap-[6px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Container124 />
      <Container125 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2023d200} id="Vector" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p2d617c80} id="Vector_2" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text34() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[80.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#b0b0b0] text-[11px] top-0">Manizales, CAL</p>
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="content-stretch flex gap-[6px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon19 />
      <Text34 />
    </div>
  );
}

function Container128() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#808080] text-[10px] top-0 uppercase">MGS Asignadas (1)</p>
    </div>
  );
}

function Container130() {
  return (
    <div className="absolute bg-[#1a1a1a] border border-[rgba(255,255,255,0.05)] border-solid h-[23px] left-0 rounded-[3px] top-0 w-[74px]" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[15px] left-[6px] text-[#2e7d32] text-[10px] top-[3px]">MGS-CAL-03</p>
    </div>
  );
}

function Container129() {
  return (
    <div className="h-[23px] relative shrink-0 w-full" data-name="Container">
      <Container130 />
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[44px] items-start relative shrink-0 w-full" data-name="Container">
      <Container128 />
      <Container129 />
    </div>
  );
}

function Text35() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[86.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#808080] text-[11px] top-0">Personal en Sitio</p>
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="h-[21px] relative shrink-0 w-[16.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#b0b0b0] text-[14px] top-[-1px]">12</p>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="content-stretch flex h-[21px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text35 />
      <Text36 />
    </div>
  );
}

function Container117() {
  return (
    <div className="h-[242.5px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start pt-[15px] px-[15px] relative size-full">
        <Container118 />
        <Container123 />
        <Container126 />
        <Container127 />
        <Container131 />
      </div>
    </div>
  );
}

function Container135() {
  return <div className="bg-[#ff5252] rounded-[33554400px] shadow-[0px_0px_8px_0px_#ff5252] shrink-0 size-[6px]" data-name="Container" />;
}

function Text37() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[#ff5252] text-[11px] top-0">Crítico</p>
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[47.297px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Container135 />
        <Text37 />
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.pbb9d080} id="Vector" stroke="var(--stroke-0, #FF5252)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 4.5V6.5" id="Vector_2" stroke="var(--stroke-0, #FF5252)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 8.5H6.005" id="Vector_3" stroke="var(--stroke-0, #FF5252)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text38() {
  return (
    <div className="flex-[1_0_0] h-[15px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-0 not-italic text-[#ff5252] text-[10px] top-0">3 vencidos</p>
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="h-[15px] relative shrink-0 w-[69.391px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4.5px] items-center relative size-full">
        <Icon20 />
        <Text38 />
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex h-[16.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container134 />
      <Container136 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute left-[98.61px] size-[14px] top-[8.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.pd1f0180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p1c197ec0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M5.83333 5.25H4.66667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 7.58333H4.66667" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 9.91667H4.66667" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Icon22() {
  return (
    <div className="absolute left-[201.03px] size-[12px] top-[9.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M7.5 1.5H10.5V4.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 7L10.5 1.5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc1a2200} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#ff5252] h-[31px] relative rounded-[3px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ff5252] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Icon21 />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[12px] left-[157.11px] not-italic text-[12px] text-center text-white top-[9.5px]">Auditar Perfil</p>
      <Icon22 />
    </div>
  );
}

function Container132() {
  return (
    <div className="h-[81.5px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[9px] items-start pt-[13px] px-[15px] relative size-full">
        <Container133 />
        <Button9 />
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="absolute bg-[#121212] content-stretch flex flex-col h-[326px] items-start left-[717.33px] p-px rounded-[3px] top-[341px] w-[343.656px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ff5252] border-solid inset-0 pointer-events-none rounded-[3px] shadow-[0px_0px_20px_0px_rgba(255,82,82,0.12)]" />
      <Container117 />
      <Container132 />
    </div>
  );
}

function Container140() {
  return (
    <div className="bg-[#121212] relative rounded-[3px] shrink-0 size-[56px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[27px] not-italic relative shrink-0 text-[#1d99cc] text-[18px]">II</p>
      </div>
    </div>
  );
}

function Container142() {
  return (
    <div className="h-[21px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-0 not-italic text-[14px] text-white top-0">Ingeniería Integral SAS</p>
    </div>
  );
}

function Container143() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] left-0 text-[#808080] text-[11px] top-0">NIT: 900.789.012</p>
    </div>
  );
}

function Container141() {
  return (
    <div className="flex-[1_0_0] h-[40.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
        <Container142 />
        <Container143 />
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex gap-[9px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container140 />
      <Container141 />
    </div>
  );
}

function Container145() {
  return (
    <div className="bg-[rgba(0,200,83,0.12)] h-[21px] relative rounded-[3px] shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[15px] left-[6px] text-[#00c853] text-[10px] top-[3px]">SST: 89%</p>
      </div>
    </div>
  );
}

function Container146() {
  return (
    <div className="bg-[rgba(29,153,204,0.12)] h-[21px] relative rounded-[3px] shrink-0 w-[42.875px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-[6px] not-italic text-[#1d99cc] text-[10px] top-[3px]">Activo</p>
      </div>
    </div>
  );
}

function Container144() {
  return (
    <div className="content-stretch flex gap-[6px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Container145 />
      <Container146 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2023d200} id="Vector" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p2d617c80} id="Vector_2" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text39() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[63.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#b0b0b0] text-[11px] top-0">Ibagué, TOL</p>
      </div>
    </div>
  );
}

function Container147() {
  return (
    <div className="content-stretch flex gap-[6px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon23 />
      <Text39 />
    </div>
  );
}

function Container149() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#808080] text-[10px] top-0 uppercase">MGS Asignadas (1)</p>
    </div>
  );
}

function Container151() {
  return (
    <div className="absolute bg-[#1a1a1a] border border-[rgba(255,255,255,0.05)] border-solid h-[23px] left-0 rounded-[3px] top-0 w-[74px]" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[15px] left-[6px] text-[#2e7d32] text-[10px] top-[3px]">MGS-TOL-01</p>
    </div>
  );
}

function Container150() {
  return (
    <div className="h-[23px] relative shrink-0 w-full" data-name="Container">
      <Container151 />
    </div>
  );
}

function Container148() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[44px] items-start relative shrink-0 w-full" data-name="Container">
      <Container149 />
      <Container150 />
    </div>
  );
}

function Text40() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[86.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#808080] text-[11px] top-0">Personal en Sitio</p>
      </div>
    </div>
  );
}

function Text41() {
  return (
    <div className="h-[21px] relative shrink-0 w-[16.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#b0b0b0] text-[14px] top-[-1px]">20</p>
      </div>
    </div>
  );
}

function Container152() {
  return (
    <div className="content-stretch flex h-[21px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text40 />
      <Text41 />
    </div>
  );
}

function Container138() {
  return (
    <div className="h-[242.5px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start pt-[15px] px-[15px] relative size-full">
        <Container139 />
        <Container144 />
        <Container147 />
        <Container148 />
        <Container152 />
      </div>
    </div>
  );
}

function Container156() {
  return <div className="bg-[#00c853] rounded-[33554400px] shadow-[0px_0px_8px_0px_#00c853] shrink-0 size-[6px]" data-name="Container" />;
}

function Text42() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[#00c853] text-[11px] top-0">Completo</p>
      </div>
    </div>
  );
}

function Container155() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[63.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Container156 />
        <Text42 />
      </div>
    </div>
  );
}

function Container154() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pr-[248.219px] relative size-full">
          <Container155 />
        </div>
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="absolute left-[98.61px] size-[14px] top-[8.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.pd1f0180} id="Vector" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p1c197ec0} id="Vector_2" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M5.83333 5.25H4.66667" id="Vector_3" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 7.58333H4.66667" id="Vector_4" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 9.91667H4.66667" id="Vector_5" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Icon25() {
  return (
    <div className="absolute left-[201.03px] size-[12px] top-[9.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M7.5 1.5H10.5V4.5" id="Vector" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 7L10.5 1.5" id="Vector_2" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc1a2200} id="Vector_3" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#1a1a1a] h-[31px] relative rounded-[3px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#1d99cc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Icon24 />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[12px] left-[157.11px] not-italic text-[#1d99cc] text-[12px] text-center top-[9.5px]">Auditar Perfil</p>
      <Icon25 />
    </div>
  );
}

function Container153() {
  return (
    <div className="h-[81.5px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[9px] items-start pt-[13px] px-[15px] relative size-full">
        <Container154 />
        <Button10 />
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="absolute bg-[#121212] content-stretch flex flex-col h-[326px] items-start left-0 p-px rounded-[3px] top-[682px] w-[343.656px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[3px] shadow-[0px_0px_20px_0px_rgba(29,153,204,0.2)]" />
      <Container138 />
      <Container153 />
    </div>
  );
}

function Container160() {
  return (
    <div className="bg-[#121212] relative rounded-[3px] shrink-0 size-[56px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[27px] not-italic relative shrink-0 text-[#1d99cc] text-[18px]">EV</p>
      </div>
    </div>
  );
}

function Container162() {
  return (
    <div className="h-[21px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-0 not-italic text-[14px] text-white top-0">Electro Solar del Valle</p>
    </div>
  );
}

function Container163() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[16.5px] left-0 text-[#808080] text-[11px] top-0">NIT: 900.890.123</p>
    </div>
  );
}

function Container161() {
  return (
    <div className="flex-[1_0_0] h-[40.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[3px] items-start relative size-full">
        <Container162 />
        <Container163 />
      </div>
    </div>
  );
}

function Container159() {
  return (
    <div className="content-stretch flex gap-[9px] h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container160 />
      <Container161 />
    </div>
  );
}

function Container165() {
  return (
    <div className="bg-[rgba(0,200,83,0.12)] h-[21px] relative rounded-[3px] shrink-0 w-[60px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[15px] left-[6px] text-[#00c853] text-[10px] top-[3px]">SST: 84%</p>
      </div>
    </div>
  );
}

function Container166() {
  return (
    <div className="bg-[rgba(29,153,204,0.12)] h-[21px] relative rounded-[3px] shrink-0 w-[42.875px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-[6px] not-italic text-[#1d99cc] text-[10px] top-[3px]">Activo</p>
      </div>
    </div>
  );
}

function Container164() {
  return (
    <div className="content-stretch flex gap-[6px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Container165 />
      <Container166 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p2023d200} id="Vector" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p2d617c80} id="Vector_2" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text43() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[46.453px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#b0b0b0] text-[11px] top-0">Cali, VAL</p>
      </div>
    </div>
  );
}

function Container167() {
  return (
    <div className="content-stretch flex gap-[6px] h-[16.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon26 />
      <Text43 />
    </div>
  );
}

function Container169() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#808080] text-[10px] top-0 uppercase">MGS Asignadas (1)</p>
    </div>
  );
}

function Container171() {
  return (
    <div className="absolute bg-[#1a1a1a] border border-[rgba(255,255,255,0.05)] border-solid h-[23px] left-0 rounded-[3px] top-0 w-[74px]" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[15px] left-[6px] text-[#2e7d32] text-[10px] top-[3px]">MGS-VAL-02</p>
    </div>
  );
}

function Container170() {
  return (
    <div className="h-[23px] relative shrink-0 w-full" data-name="Container">
      <Container171 />
    </div>
  );
}

function Container168() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[44px] items-start relative shrink-0 w-full" data-name="Container">
      <Container169 />
      <Container170 />
    </div>
  );
}

function Text44() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[86.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#808080] text-[11px] top-0">Personal en Sitio</p>
      </div>
    </div>
  );
}

function Text45() {
  return (
    <div className="h-[21px] relative shrink-0 w-[16.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#b0b0b0] text-[14px] top-[-1px]">16</p>
      </div>
    </div>
  );
}

function Container172() {
  return (
    <div className="content-stretch flex h-[21px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text44 />
      <Text45 />
    </div>
  );
}

function Container158() {
  return (
    <div className="h-[242.5px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[12px] items-start pt-[15px] px-[15px] relative size-full">
        <Container159 />
        <Container164 />
        <Container167 />
        <Container168 />
        <Container172 />
      </div>
    </div>
  );
}

function Container176() {
  return <div className="bg-[#ff9800] rounded-[33554400px] shadow-[0px_0px_8px_0px_#ff9800] shrink-0 size-[6px]" data-name="Container" />;
}

function Text46() {
  return (
    <div className="flex-[1_0_0] h-[16.5px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[#ff9800] text-[11px] top-0">Atención</p>
      </div>
    </div>
  );
}

function Container175() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[59.469px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Container176 />
        <Text46 />
      </div>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.pbb9d080} id="Vector" stroke="var(--stroke-0, #FF5252)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 4.5V6.5" id="Vector_2" stroke="var(--stroke-0, #FF5252)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 8.5H6.005" id="Vector_3" stroke="var(--stroke-0, #FF5252)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text47() {
  return (
    <div className="flex-[1_0_0] h-[15px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-0 not-italic text-[#ff5252] text-[10px] top-0">1 vencido</p>
      </div>
    </div>
  );
}

function Container177() {
  return (
    <div className="h-[15px] relative shrink-0 w-[61.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4.5px] items-center relative size-full">
        <Icon27 />
        <Text47 />
      </div>
    </div>
  );
}

function Container174() {
  return (
    <div className="content-stretch flex h-[16.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container175 />
      <Container177 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="absolute left-[98.63px] size-[14px] top-[8.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.pd1f0180} id="Vector" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p1c197ec0} id="Vector_2" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M5.83333 5.25H4.66667" id="Vector_3" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 7.58333H4.66667" id="Vector_4" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 9.91667H4.66667" id="Vector_5" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Icon29() {
  return (
    <div className="absolute left-[201.05px] size-[12px] top-[9.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M7.5 1.5H10.5V4.5" id="Vector" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 7L10.5 1.5" id="Vector_2" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pc1a2200} id="Vector_3" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#1a1a1a] h-[31px] relative rounded-[3px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#1d99cc] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Icon28 />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[12px] left-[157.13px] not-italic text-[#1d99cc] text-[12px] text-center top-[9.5px]">Auditar Perfil</p>
      <Icon29 />
    </div>
  );
}

function Container173() {
  return (
    <div className="h-[81.5px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[9px] items-start pt-[13px] px-[15px] relative size-full">
        <Container174 />
        <Button11 />
      </div>
    </div>
  );
}

function Container157() {
  return (
    <div className="absolute bg-[#121212] content-stretch flex flex-col h-[326px] items-start left-[358.66px] p-px rounded-[3px] top-[682px] w-[343.672px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[3px] shadow-[0px_0px_20px_0px_rgba(29,153,204,0.2)]" />
      <Container158 />
      <Container173 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[1008px] relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container32 />
      <Container52 />
      <Container74 />
      <Container94 />
      <Container116 />
      <Container137 />
      <Container157 />
    </div>
  );
}

function Container8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1109px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pt-[18px] px-[24px] relative rounded-[inherit] size-full">
        <Container9 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] h-[1216.078px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container1 />
        <Container3 />
        <Container8 />
      </div>
    </div>
  );
}

function PK() {
  return (
    <div className="bg-[#050505] h-[1216.078px] relative shrink-0 w-full" data-name="pK">
      <div className="content-stretch flex items-start pl-[240px] relative size-full">
        <Container />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-[#080808] content-stretch flex flex-col h-[632px] items-start left-0 top-0 w-[1349px]" data-name="Body">
      <PK />
    </div>
  );
}

function Container180() {
  return (
    <div className="h-[27px] relative shrink-0 w-[103.484px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[#1d99cc] text-[18px] top-px tracking-[1px]">SOLENIUM</p>
      </div>
    </div>
  );
}

function Container181() {
  return (
    <div className="bg-[rgba(29,153,204,0.15)] h-[19.5px] relative rounded-[3px] shrink-0 w-[45.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[13.5px] left-[6px] not-italic text-[#1d99cc] text-[9px] top-[3px] tracking-[0.5px]">ADMIN</p>
      </div>
    </div>
  );
}

function Container179() {
  return (
    <div className="h-[72px] relative shrink-0 w-[239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center justify-center pb-px pr-[0.016px] relative size-full">
        <Container180 />
        <Container181 />
      </div>
    </div>
  );
}

function Container183() {
  return (
    <div className="absolute h-[15px] left-0 top-0 w-[215px]" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-[12px] not-italic text-[#808080] text-[10px] top-0 tracking-[1px]">GESTIÓN</p>
    </div>
  );
}

function Icon30() {
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
      <Icon30 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[34px] not-italic text-[#808080] text-[12px] top-[7.5px]">Dashboard</p>
    </div>
  );
}

function Icon31() {
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
      <Icon31 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[34px] not-italic text-[#808080] text-[12px] top-[7.5px]">Crear Pliego</p>
    </div>
  );
}

function Icon32() {
  return (
    <div className="absolute left-[9px] size-[16px] top-[8.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f197700} id="Vector_3" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3bf3e100} id="Vector_4" stroke="var(--stroke-0, #1D99CC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute bg-[rgba(29,153,204,0.12)] border border-[#1d99cc] border-solid h-[35px] left-0 rounded-[3px] top-[103px] w-[215px]" data-name="Link">
      <Icon32 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[34px] not-italic text-[#1d99cc] text-[12px] top-[7.5px]">Partners</p>
    </div>
  );
}

function Container182() {
  return (
    <div className="h-[138px] relative shrink-0 w-full" data-name="Container">
      <Container183 />
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
        <Container182 />
      </div>
    </div>
  );
}

function Icon33() {
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

function Button12() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon33 />
      </div>
    </div>
  );
}

function Icon34() {
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

function Button13() {
  return (
    <div className="bg-[#1d99cc] flex-[1_0_0] h-[28px] min-h-px min-w-px relative rounded-[33554400px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon34 />
      </div>
    </div>
  );
}

function Container186() {
  return (
    <div className="bg-[#1a1a1a] h-[36px] relative rounded-[33554400px] shrink-0 w-[67px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3px] items-center px-[4px] py-px relative size-full">
        <Button12 />
        <Button13 />
      </div>
    </div>
  );
}

function Container185() {
  return (
    <div className="content-stretch flex h-[36px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container186 />
    </div>
  );
}

function Container189() {
  return (
    <div className="h-[18px] relative shrink-0 w-[63.813px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[12px] text-white top-0">Admin SST</p>
      </div>
    </div>
  );
}

function Icon35() {
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

function Container188() {
  return (
    <div className="content-stretch flex h-[18px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container189 />
      <Icon35 />
    </div>
  );
}

function Text48() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[19.266px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#808080] text-[9px] top-0 tracking-[0.5px] uppercase">Rol</p>
      </div>
    </div>
  );
}

function Text49() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[19.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[16.5px] left-0 text-[#1d99cc] text-[11px] top-0">SST</p>
      </div>
    </div>
  );
}

function Container190() {
  return (
    <div className="content-stretch flex h-[16.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text48 />
      <Text49 />
    </div>
  );
}

function Container187() {
  return (
    <div className="bg-[#121212] h-[60.5px] relative rounded-[3px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pb-px pt-[10px] px-[13px] relative size-full">
        <Container188 />
        <Container190 />
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

function Container184() {
  return (
    <div className="h-[170px] relative shrink-0 w-[239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[9px] items-start pt-[13px] px-[12px] relative size-full">
        <Container185 />
        <Container187 />
        <Link3 />
      </div>
    </div>
  );
}

function Container178() {
  return (
    <div className="absolute bg-[#0a0a0a] content-stretch flex flex-col h-[632px] items-start left-0 pr-px top-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-r border-solid inset-0 pointer-events-none" />
      <Container179 />
      <Navigation />
      <Container184 />
    </div>
  );
}

export default function SetupSoleniumSolarversoSystem() {
  return (
    <div className="bg-white relative size-full" data-name="Setup Solenium Solarverso System">
      <Body />
      <Container178 />
    </div>
  );
}