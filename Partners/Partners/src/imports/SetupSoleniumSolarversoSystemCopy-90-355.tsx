import svgPaths from "./svg-bgeux5omqg";

function Icon() {
  return (
    <div className="absolute left-[9px] size-[14px] top-[4.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p2c0cbc0} id="Vector" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M11.0833 7H2.91667" id="Vector_2" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute border border-[rgba(255,255,255,0.05)] border-solid h-[25px] left-0 rounded-[3px] top-0 w-[138.313px]" data-name="Button">
      <Icon />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[11px] left-[78.5px] not-italic text-[#808080] text-[11px] text-center top-[5px]">Volver a Proyectos</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[23.391px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[23.4px] left-0 not-italic text-[18px] text-white top-px">MGS Antioquia 02</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] left-0 text-[#2e7d32] text-[12px] top-0">MGS-ANT-02</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[47.391px] relative shrink-0 w-[157.391px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Heading />
        <Container5 />
      </div>
    </div>
  );
}

function Container7() {
  return <div className="bg-[#00c853] rounded-[33554400px] shrink-0 size-[7.5px]" data-name="Container" />;
}

function Container8() {
  return (
    <div className="flex-[1_0_0] h-[18px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#b0b0b0] text-[12px] top-0">En Ejecución</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[18px] relative shrink-0 w-[86.297px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex h-[47.391px] items-start justify-between left-0 top-[37px] w-[1161px]" data-name="Container">
      <Container4 />
      <Container6 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[84.391px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Container3 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[12px] size-[16px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f197700} id="Vector_3" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3bf3e100} id="Vector_4" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[25px] left-0 top-0 w-[152.891px]" data-name="Button">
      <Icon1 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[12px] left-[87.5px] not-italic text-[#606060] text-[12px] text-center top-[2px]">Personal Asociado</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[12px] size-[16px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p299d1200} id="Vector" stroke="var(--stroke-0, #2E7D32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #2E7D32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return <div className="absolute bg-[#2e7d32] h-[2px] left-0 top-[23px] w-[84.625px]" data-name="Container" />;
}

function Button2() {
  return (
    <div className="absolute h-[25px] left-[158.89px] top-0 w-[84.625px]" data-name="Button">
      <Icon2 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[12px] left-[53.5px] not-italic text-[#2e7d32] text-[12px] text-center top-[2px]">Tareas</p>
      <Container10 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[12px] size-[16px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[25px] left-[249.52px] top-0 w-[149.531px]" data-name="Button">
      <Icon3 />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[12px] left-[86px] not-italic text-[#606060] text-[12px] text-center top-[2px]">Documentos MGS</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#808080] text-[11px] top-0">6 tareas totales</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[53.516px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[#b0b0b0] text-[11px] top-0">Pendiente</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#252525] h-[16.5px] relative rounded-[3px] shrink-0 w-[14.406px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[4.5px] py-[1.5px] relative size-full">
        <p className="font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[13.5px] relative shrink-0 text-[#808080] text-[9px]">1</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[16.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#1a1a1a] h-[30.5px] relative rounded-tl-[3px] rounded-tr-[3px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-tl-[3px] rounded-tr-[3px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[7px] px-[10px] relative size-full">
        <Container16 />
      </div>
    </div>
  );
}

function Container21() {
  return <div className="bg-[#ff9800] rounded-[33554400px] shrink-0 size-[4.5px]" data-name="Container" />;
}

function Container22() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[28.672px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#606060] text-[9px] top-0 uppercase">Media</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[6px] h-[13.5px] items-center relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex h-[16.797px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[16.8px] min-h-px min-w-px not-italic relative text-[#b0b0b0] text-[12px] whitespace-pre-wrap">Instalación de Fundaciones</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_90_380)" id="Icon">
          <path d={svgPaths.p3cf7650} id="Vector" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M5 2.5V5L6.66667 5.83333" id="Vector_2" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_90_380">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[15px] relative shrink-0 w-[57.891px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#606060] text-[10px] top-0">22 Dic 2026</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[4.5px] h-[15px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon4 />
      <Container25 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#1a1a1a] h-[80.297px] relative rounded-[3px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pb-px pt-[10px] px-[10px] relative size-full">
        <Container20 />
        <Container23 />
        <Container24 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[6px] h-[352.391px] items-start justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <Container15 />
      <Container19 />
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.344px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[#b0b0b0] text-[11px] top-0">En Progreso</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[#252525] h-[16.5px] relative rounded-[3px] shrink-0 w-[14.406px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[4.5px] py-[1.5px] relative size-full">
        <p className="font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[13.5px] relative shrink-0 text-[#808080] text-[9px]">3</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex h-[16.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#1a1a1a] h-[30.5px] relative rounded-tl-[3px] rounded-tr-[3px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-tl-[3px] rounded-tr-[3px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[7px] px-[10px] relative size-full">
        <Container28 />
      </div>
    </div>
  );
}

function Container34() {
  return <div className="bg-[#ff5252] rounded-[33554400px] shrink-0 size-[4.5px]" data-name="Container" />;
}

function Container35() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[21.688px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#606060] text-[9px] top-0 uppercase">Alta</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[13.5px] items-center left-[10px] top-[10px] w-[261.25px]" data-name="Container">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex h-[16.797px] items-start left-[10px] top-[29.5px] w-[261.25px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[16.8px] min-h-px min-w-px not-italic relative text-[#b0b0b0] text-[12px] whitespace-pre-wrap">Excavación Zanja 1</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[15px] left-[10px] top-[55.3px] w-[261.25px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#606060] text-[10px] top-0">Ana María López</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_90_380)" id="Icon">
          <path d={svgPaths.p3cf7650} id="Vector" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M5 2.5V5L6.66667 5.83333" id="Vector_2" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_90_380">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[15px] relative shrink-0 w-[55.938px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#606060] text-[10px] top-0">18 Dic 2026</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex gap-[4.5px] h-[15px] items-center left-[10px] top-[76.3px] w-[261.25px]" data-name="Container">
      <Icon5 />
      <Container39 />
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[#1a1a1a] h-[101.297px] relative rounded-[3px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Container33 />
      <Container36 />
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container42() {
  return <div className="bg-[#ff9800] rounded-[33554400px] shrink-0 size-[4.5px]" data-name="Container" />;
}

function Container43() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[28.672px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#606060] text-[9px] top-0 uppercase">Media</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[13.5px] items-center left-[10px] top-[10px] w-[261.25px]" data-name="Container">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex h-[16.797px] items-start left-[10px] top-[29.5px] w-[261.25px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[16.8px] min-h-px min-w-px not-italic relative text-[#b0b0b0] text-[12px] whitespace-pre-wrap">Compactación Base Granular</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[15px] left-[10px] top-[55.3px] w-[261.25px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#606060] text-[10px] top-0">Jorge Ramirez</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_90_380)" id="Icon">
          <path d={svgPaths.p3cf7650} id="Vector" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M5 2.5V5L6.66667 5.83333" id="Vector_2" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_90_380">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[15px] relative shrink-0 w-[55.953px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#606060] text-[10px] top-0">19 Dic 2026</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex gap-[4.5px] h-[15px] items-center left-[10px] top-[76.3px] w-[261.25px]" data-name="Container">
      <Icon6 />
      <Container47 />
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-[#1a1a1a] h-[101.297px] relative rounded-[3px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Container41 />
      <Container44 />
      <Container45 />
      <Container46 />
    </div>
  );
}

function Container50() {
  return <div className="bg-[#ff5252] rounded-[33554400px] shrink-0 size-[4.5px]" data-name="Container" />;
}

function Container51() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[21.688px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#606060] text-[9px] top-0 uppercase">Alta</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[13.5px] items-center left-[10px] top-[10px] w-[261.25px]" data-name="Container">
      <Container50 />
      <Container51 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex h-[16.797px] items-start left-[10px] top-[29.5px] w-[261.25px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[16.8px] min-h-px min-w-px not-italic relative text-[#b0b0b0] text-[12px] whitespace-pre-wrap">Construcción Vía Acceso Principal</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[15px] left-[10px] top-[55.3px] w-[261.25px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#606060] text-[10px] top-0">Carlos Mendoza</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_90_380)" id="Icon">
          <path d={svgPaths.p3cf7650} id="Vector" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M5 2.5V5L6.66667 5.83333" id="Vector_2" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_90_380">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[15px] relative shrink-0 w-[55.859px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#606060] text-[10px] top-0">21 Dic 2026</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex gap-[4.5px] h-[15px] items-center left-[10px] top-[76.3px] w-[261.25px]" data-name="Container">
      <Icon7 />
      <Container55 />
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-[#1a1a1a] h-[101.297px] relative rounded-[3px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Container49 />
      <Container52 />
      <Container53 />
      <Container54 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[315.891px] items-start relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Container40 />
      <Container48 />
    </div>
  );
}

function Container26() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[6px] h-[352.391px] items-start justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <Container27 />
      <Container31 />
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[56.922px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[#b0b0b0] text-[11px] top-0">Bloqueado</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="bg-[#252525] h-[16.5px] relative rounded-[3px] shrink-0 w-[14.406px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[4.5px] py-[1.5px] relative size-full">
        <p className="font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[13.5px] relative shrink-0 text-[#808080] text-[9px]">1</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex h-[16.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Container60 />
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-[#1a1a1a] h-[30.5px] relative rounded-tl-[3px] rounded-tr-[3px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-tl-[3px] rounded-tr-[3px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[7px] px-[10px] relative size-full">
        <Container58 />
      </div>
    </div>
  );
}

function Container63() {
  return <div className="bg-[#ff5252] rounded-[33554400px] shrink-0 size-[4.5px]" data-name="Container" />;
}

function Container64() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[21.688px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#606060] text-[9px] top-0 uppercase">Alta</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[13.5px] items-center left-[10px] top-[10px] w-[261.25px]" data-name="Container">
      <Container63 />
      <Container64 />
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex h-[16.797px] items-start left-[10px] top-[29.5px] w-[261.25px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[16.8px] min-h-px min-w-px not-italic relative text-[#b0b0b0] text-[12px] whitespace-pre-wrap">Instalación Cerramiento Sector Norte</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute h-[15px] left-[10px] top-[55.3px] w-[261.25px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#606060] text-[10px] top-0">Pedro Gómez</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_90_380)" id="Icon">
          <path d={svgPaths.p3cf7650} id="Vector" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M5 2.5V5L6.66667 5.83333" id="Vector_2" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_90_380">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[15px] relative shrink-0 w-[58.094px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#606060] text-[10px] top-0">20 Dic 2026</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex gap-[4.5px] h-[15px] items-center left-[10px] top-[76.3px] w-[261.25px]" data-name="Container">
      <Icon8 />
      <Container68 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_90_401)" id="Icon">
          <path d={svgPaths.p145415f0} id="Vector" stroke="var(--stroke-0, #FF5252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M5 3.75V5.41667" id="Vector_2" stroke="var(--stroke-0, #FF5252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M5 7.08333H5.00417" id="Vector_3" stroke="var(--stroke-0, #FF5252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_90_401">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[46.578px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[13.5px] left-0 not-italic text-[#ff5252] text-[9px] top-0">Bloqueado</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute bg-[rgba(255,82,82,0.15)] content-stretch flex gap-[4.5px] h-[19.5px] items-center left-[10px] pl-[6px] rounded-[3px] top-[97.3px] w-[261.25px]" data-name="Container">
      <Icon9 />
      <Container70 />
    </div>
  );
}

function Container61() {
  return (
    <div className="bg-[#1a1a1a] h-[126.797px] relative rounded-[3px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Container62 />
      <Container65 />
      <Container66 />
      <Container67 />
      <Container69 />
    </div>
  );
}

function Container56() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[6px] h-[352.391px] items-start justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <Container57 />
      <Container61 />
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[#b0b0b0] text-[11px] top-0">Completado</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="bg-[#252525] h-[16.5px] relative rounded-[3px] shrink-0 w-[14.406px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[4.5px] py-[1.5px] relative size-full">
        <p className="font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[13.5px] relative shrink-0 text-[#808080] text-[9px]">1</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex h-[16.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container74 />
      <Container75 />
    </div>
  );
}

function Container72() {
  return (
    <div className="bg-[#1a1a1a] h-[30.5px] relative rounded-tl-[3px] rounded-tr-[3px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-tl-[3px] rounded-tr-[3px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[7px] px-[10px] relative size-full">
        <Container73 />
      </div>
    </div>
  );
}

function Container78() {
  return <div className="bg-[#606060] rounded-[33554400px] shrink-0 size-[4.5px]" data-name="Container" />;
}

function Container79() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[23.281px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#606060] text-[9px] top-0 uppercase">Baja</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[13.5px] items-center left-[10px] top-[10px] w-[261.25px]" data-name="Container">
      <Container78 />
      <Container79 />
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute content-stretch flex h-[16.797px] items-start left-[10px] top-[29.5px] w-[261.25px]" data-name="Container">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[16.8px] min-h-px min-w-px not-italic relative text-[#b0b0b0] text-[12px] whitespace-pre-wrap">Levantamiento Topográfico</p>
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute h-[15px] left-[10px] top-[55.3px] w-[261.25px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#606060] text-[10px] top-0">Luis Martínez</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_90_380)" id="Icon">
          <path d={svgPaths.p3cf7650} id="Vector" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
          <path d="M5 2.5V5L6.66667 5.83333" id="Vector_2" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
        <defs>
          <clipPath id="clip0_90_380">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[15px] relative shrink-0 w-[55.688px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#606060] text-[10px] top-0">15 Dic 2026</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute content-stretch flex gap-[4.5px] h-[15px] items-center left-[10px] top-[76.3px] w-[261.25px]" data-name="Container">
      <Icon10 />
      <Container83 />
    </div>
  );
}

function Container76() {
  return (
    <div className="bg-[#1a1a1a] h-[101.297px] relative rounded-[3px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Container77 />
      <Container80 />
      <Container81 />
      <Container82 />
    </div>
  );
}

function Container71() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[6px] h-[352.391px] items-start justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <Container72 />
      <Container76 />
    </div>
  );
}

function Container13() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[352.391px] relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container26 />
      <Container56 />
      <Container71 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[380.891px] items-start relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1197px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[18px] items-start pt-[18px] px-[18px] relative size-full">
        <Container2 />
        <Container9 />
        <Container11 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] h-[944px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function PQ() {
  return (
    <div className="absolute bg-[#050505] content-stretch flex h-[944px] items-start left-0 pl-[220px] top-0 w-[1417px]" data-name="pQ">
      <Container />
    </div>
  );
}

export default function SetupSoleniumSolarversoSystemCopy() {
  return (
    <div className="bg-white relative size-full" data-name="Setup Solenium Solarverso System (Copy)">
      <PQ />
    </div>
  );
}