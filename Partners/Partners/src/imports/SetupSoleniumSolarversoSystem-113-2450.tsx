import svgPaths from "./svg-44mvz001z4";

function Icon() {
  return (
    <div className="absolute left-[12px] size-[14px] top-[7.25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M8.75 10.5L5.25 7L8.75 3.5" id="Vector" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute border border-[rgba(255,255,255,0.05)] border-solid h-[30.5px] left-[24px] rounded-[3px] top-[18px] w-[145.438px]" data-name="Link">
      <Icon />
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-[32px] not-italic text-[#808080] text-[11px] top-[6px]">Volver a Proyectos</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[23.391px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[23.4px] left-0 not-italic text-[18px] text-white top-px">Montaje Eléctrico Antioquia II</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] left-0 text-[#2e7d32] text-[12px] top-0">MGS-ANT-02</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[47.391px] relative shrink-0 w-[254.234px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Heading />
        <Container4 />
      </div>
    </div>
  );
}

function Container6() {
  return <div className="bg-[#00c853] rounded-[3.75px] shrink-0 size-[7.5px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[18px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#b0b0b0] text-[12px] top-0">En Ejecución</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[18px] relative shrink-0 w-[86.297px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Container6 />
        <Text />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex h-[47.391px] items-start justify-between left-[24px] top-[66.5px] w-[1061px]" data-name="Container">
      <Container3 />
      <Container5 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[18px] size-[16px] top-[9px]" data-name="Icon">
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

function Button() {
  return (
    <div className="absolute h-[34px] left-0 top-0 w-[166.172px]" data-name="Button">
      <Icon1 />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[12px] left-[94px] not-italic text-[#606060] text-[12px] text-center top-[11px]">Personal Asociado</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[18px] size-[16px] top-[9px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p299d1200} id="Vector" stroke="var(--stroke-0, #2E7D32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #2E7D32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return <div className="absolute bg-[#2e7d32] h-[2px] left-0 top-[32px] w-[97.141px]" data-name="Container" />;
}

function Button1() {
  return (
    <div className="absolute h-[34px] left-[166.17px] top-0 w-[97.141px]" data-name="Button">
      <Icon2 />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[12px] left-[60.5px] not-italic text-[#2e7d32] text-[12px] text-center top-[11px]">Tareas</p>
      <Container8 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[18px] size-[16px] top-[9px]" data-name="Icon">
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

function Button2() {
  return (
    <div className="absolute h-[34px] left-[263.31px] top-0 w-[162.469px]" data-name="Button">
      <Icon3 />
      <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[12px] left-[92.5px] not-italic text-[#606060] text-[12px] text-center top-[11px]">Documentos MGS</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid h-[35px] left-[24px] top-[131.89px] w-[1061px]" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[184.891px] relative shrink-0 w-[1109px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link />
        <Container2 />
        <Container7 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16.5px] left-0 not-italic text-[#808080] text-[11px] top-0">6 tareas totales</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[53.516px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[#a0a0a0] text-[11px] top-0">Pendiente</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[3px] shrink-0 size-[18px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[15px] left-[6px] text-[#606060] text-[10px] top-[1.5px]">1</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#121212] h-[35px] relative rounded-tl-[3px] rounded-tr-[3px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-tl-[3px] rounded-tr-[3px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <Text1 />
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[#ff9800] border-solid h-[23px] left-[13px] rounded-[3px] top-[13px] w-[46.109px]" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[13.5px] left-[6px] not-italic text-[#ff9800] text-[9px] top-[4.5px] tracking-[0.5px]">MEDIA</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex h-[16.797px] items-start left-[13px] top-[45px] w-[230.25px]" data-name="Heading 4">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.8px] min-h-px min-w-px not-italic relative text-[#e0e0e0] text-[12px] whitespace-pre-wrap">Instalación de Fundaciones</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-0 size-[11px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_113_2458)" id="Icon">
          <path d={svgPaths.p39fe300} id="Vector" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d={svgPaths.p36363d00} id="Vector_2" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d={svgPaths.p2eafe360} id="Vector_3" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d={svgPaths.p2c304f80} id="Vector_4" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
        </g>
        <defs>
          <clipPath id="clip0_113_2458">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[15px] left-[13px] top-[69.8px] w-[230.25px]" data-name="Container">
      <Icon4 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[17px] not-italic text-[#808080] text-[10px] top-0">Ana María López</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-0 size-[11px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_113_2470)" id="Icon">
          <path d="M3.66667 0.916667V2.75" id="Vector" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d="M7.33333 0.916667V2.75" id="Vector_2" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d={svgPaths.p2388ff00} id="Vector_3" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d="M1.375 4.58333H9.625" id="Vector_4" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
        </g>
        <defs>
          <clipPath id="clip0_113_2470">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[15px] left-[13px] top-[90.8px] w-[230.25px]" data-name="Container">
      <Icon5 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[17px] not-italic text-[#606060] text-[10px] top-0">22 Dic 2026</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#1a1a1a] h-[118.797px] relative rounded-[3px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Container15 />
      <Heading1 />
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container12() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[9px] h-[418.391px] items-start justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[#a0a0a0] text-[11px] top-0">En Progreso</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[3px] shrink-0 size-[18px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[15px] left-[6px] text-[#606060] text-[10px] top-[1.5px]">3</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#121212] h-[35px] relative rounded-tl-[3px] rounded-tr-[3px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-tl-[3px] rounded-tr-[3px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <Text3 />
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[#ff5252] border-solid h-[23px] left-[13px] rounded-[3px] top-[13px] w-[38.922px]" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[13.5px] left-[6px] not-italic text-[#ff5252] text-[9px] top-[4.5px] tracking-[0.5px]">ALTA</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex h-[16.797px] items-start left-[13px] top-[45px] w-[230.25px]" data-name="Heading 4">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.8px] min-h-px min-w-px not-italic relative text-[#e0e0e0] text-[12px] whitespace-pre-wrap">Excavación Zanja 1</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-0 size-[11px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_113_2458)" id="Icon">
          <path d={svgPaths.p39fe300} id="Vector" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d={svgPaths.p36363d00} id="Vector_2" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d={svgPaths.p2eafe360} id="Vector_3" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d={svgPaths.p2c304f80} id="Vector_4" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
        </g>
        <defs>
          <clipPath id="clip0_113_2458">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[15px] left-[13px] top-[69.8px] w-[230.25px]" data-name="Container">
      <Icon6 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[17px] not-italic text-[#808080] text-[10px] top-0">Ana María López</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-0 size-[11px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_113_2470)" id="Icon">
          <path d="M3.66667 0.916667V2.75" id="Vector" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d="M7.33333 0.916667V2.75" id="Vector_2" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d={svgPaths.p2388ff00} id="Vector_3" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d="M1.375 4.58333H9.625" id="Vector_4" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
        </g>
        <defs>
          <clipPath id="clip0_113_2470">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[15px] left-[13px] top-[90.8px] w-[230.25px]" data-name="Container">
      <Icon7 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[17px] not-italic text-[#606060] text-[10px] top-0">18 Dic 2026</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#1a1a1a] h-[118.797px] relative rounded-[3px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Container22 />
      <Heading2 />
      <Container23 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[#ff9800] border-solid h-[23px] left-[13px] rounded-[3px] top-[13px] w-[46.109px]" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[13.5px] left-[6px] not-italic text-[#ff9800] text-[9px] top-[4.5px] tracking-[0.5px]">MEDIA</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex h-[16.797px] items-start left-[13px] top-[45px] w-[230.25px]" data-name="Heading 4">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.8px] min-h-px min-w-px not-italic relative text-[#e0e0e0] text-[12px] whitespace-pre-wrap">Compactación Base Granular</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-0 size-[11px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_113_2458)" id="Icon">
          <path d={svgPaths.p39fe300} id="Vector" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d={svgPaths.p36363d00} id="Vector_2" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d={svgPaths.p2eafe360} id="Vector_3" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d={svgPaths.p2c304f80} id="Vector_4" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
        </g>
        <defs>
          <clipPath id="clip0_113_2458">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[15px] left-[13px] top-[69.8px] w-[230.25px]" data-name="Container">
      <Icon8 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[17px] not-italic text-[#808080] text-[10px] top-0">Jorge Ramirez</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-0 size-[11px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_113_2470)" id="Icon">
          <path d="M3.66667 0.916667V2.75" id="Vector" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d="M7.33333 0.916667V2.75" id="Vector_2" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d={svgPaths.p2388ff00} id="Vector_3" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d="M1.375 4.58333H9.625" id="Vector_4" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
        </g>
        <defs>
          <clipPath id="clip0_113_2470">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[15px] left-[13px] top-[90.8px] w-[230.25px]" data-name="Container">
      <Icon9 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[17px] not-italic text-[#606060] text-[10px] top-0">18 Dic 2026</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#1a1a1a] h-[118.797px] relative rounded-[3px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Container26 />
      <Heading3 />
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[#ff5252] border-solid h-[23px] left-[13px] rounded-[3px] top-[13px] w-[38.922px]" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[13.5px] left-[6px] not-italic text-[#ff5252] text-[9px] top-[4.5px] tracking-[0.5px]">ALTA</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute content-stretch flex h-[16.797px] items-start left-[13px] top-[45px] w-[230.25px]" data-name="Heading 4">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.8px] min-h-px min-w-px not-italic relative text-[#e0e0e0] text-[12px] whitespace-pre-wrap">Construcción Vía Acceso Principal</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-0 size-[11px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_113_2458)" id="Icon">
          <path d={svgPaths.p39fe300} id="Vector" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d={svgPaths.p36363d00} id="Vector_2" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d={svgPaths.p2eafe360} id="Vector_3" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d={svgPaths.p2c304f80} id="Vector_4" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
        </g>
        <defs>
          <clipPath id="clip0_113_2458">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[15px] left-[13px] top-[69.8px] w-[230.25px]" data-name="Container">
      <Icon10 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[17px] not-italic text-[#808080] text-[10px] top-0">Carlos Mendoza</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-0 size-[11px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_113_2470)" id="Icon">
          <path d="M3.66667 0.916667V2.75" id="Vector" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d="M7.33333 0.916667V2.75" id="Vector_2" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d={svgPaths.p2388ff00} id="Vector_3" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d="M1.375 4.58333H9.625" id="Vector_4" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
        </g>
        <defs>
          <clipPath id="clip0_113_2470">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[15px] left-[13px] top-[90.8px] w-[230.25px]" data-name="Container">
      <Icon11 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[17px] not-italic text-[#606060] text-[10px] top-0">21 Dic 2026</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[#1a1a1a] h-[118.797px] relative rounded-[3px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Container30 />
      <Heading4 />
      <Container31 />
      <Container32 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[9px] h-[374.391px] items-start relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Container25 />
      <Container29 />
    </div>
  );
}

function Container18() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[9px] h-[418.391px] items-start justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[56.922px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[#a0a0a0] text-[11px] top-0">Bloqueado</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[3px] shrink-0 size-[18px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[15px] left-[6px] text-[#606060] text-[10px] top-[1.5px]">1</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-[#121212] h-[35px] relative rounded-tl-[3px] rounded-tr-[3px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-tl-[3px] rounded-tr-[3px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <Text5 />
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[#ff5252] border-solid h-[23px] left-[13px] rounded-[3px] top-[13px] w-[38.922px]" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[13.5px] left-[6px] not-italic text-[#ff5252] text-[9px] top-[4.5px] tracking-[0.5px]">ALTA</p>
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute content-stretch flex h-[16.797px] items-start left-[13px] top-[45px] w-[230.25px]" data-name="Heading 4">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.8px] min-h-px min-w-px not-italic relative text-[#e0e0e0] text-[12px] whitespace-pre-wrap">Instalación Cerramiento Sector Norte</p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-0 size-[11px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_113_2458)" id="Icon">
          <path d={svgPaths.p39fe300} id="Vector" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d={svgPaths.p36363d00} id="Vector_2" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d={svgPaths.p2eafe360} id="Vector_3" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d={svgPaths.p2c304f80} id="Vector_4" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
        </g>
        <defs>
          <clipPath id="clip0_113_2458">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute h-[15px] left-[13px] top-[69.8px] w-[230.25px]" data-name="Container">
      <Icon12 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[17px] not-italic text-[#808080] text-[10px] top-0">Pedro Gómez</p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-0 size-[11px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_113_2470)" id="Icon">
          <path d="M3.66667 0.916667V2.75" id="Vector" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d="M7.33333 0.916667V2.75" id="Vector_2" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d={svgPaths.p2388ff00} id="Vector_3" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d="M1.375 4.58333H9.625" id="Vector_4" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
        </g>
        <defs>
          <clipPath id="clip0_113_2470">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[15px] left-[13px] top-[90.8px] w-[230.25px]" data-name="Container">
      <Icon13 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[17px] not-italic text-[#606060] text-[10px] top-0">20 Dic 2026</p>
    </div>
  );
}

function Icon14() {
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

function Text7() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[46.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[13.5px] left-0 not-italic text-[#ff5252] text-[9px] top-0">Bloqueado</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute bg-[rgba(255,82,82,0.1)] content-stretch flex gap-[6px] h-[24.5px] items-center left-[13px] pl-[7px] pr-px py-px rounded-[3px] top-[114.8px] w-[230.25px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,82,82,0.3)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Icon14 />
      <Text7 />
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#1a1a1a] h-[152.297px] relative rounded-[3px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Container36 />
      <Heading5 />
      <Container37 />
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container33() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[9px] h-[418.391px] items-start justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[64.781px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[#a0a0a0] text-[11px] top-0">Completado</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[3px] shrink-0 size-[18px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[15px] left-[6px] text-[#606060] text-[10px] top-[1.5px]">1</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-[#121212] h-[35px] relative rounded-tl-[3px] rounded-tr-[3px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-tl-[3px] rounded-tr-[3px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[13px] py-px relative size-full">
          <Text8 />
          <Text9 />
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[#1d99cc] border-solid h-[23px] left-[13px] rounded-[3px] top-[13px] w-[40.484px]" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[13.5px] left-[6px] not-italic text-[#1d99cc] text-[9px] top-[4.5px] tracking-[0.5px]">BAJA</p>
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute content-stretch flex h-[16.797px] items-start left-[13px] top-[45px] w-[230.25px]" data-name="Heading 4">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.8px] min-h-px min-w-px not-italic relative text-[#e0e0e0] text-[12px] whitespace-pre-wrap">Levantamiento Topográfico</p>
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-0 size-[11px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_113_2458)" id="Icon">
          <path d={svgPaths.p39fe300} id="Vector" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d={svgPaths.p36363d00} id="Vector_2" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d={svgPaths.p2eafe360} id="Vector_3" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d={svgPaths.p2c304f80} id="Vector_4" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
        </g>
        <defs>
          <clipPath id="clip0_113_2458">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[15px] left-[13px] top-[69.8px] w-[230.25px]" data-name="Container">
      <Icon15 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[17px] not-italic text-[#808080] text-[10px] top-0">Luis Martínez</p>
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-0 size-[11px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g clipPath="url(#clip0_113_2470)" id="Icon">
          <path d="M3.66667 0.916667V2.75" id="Vector" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d="M7.33333 0.916667V2.75" id="Vector_2" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d={svgPaths.p2388ff00} id="Vector_3" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
          <path d="M1.375 4.58333H9.625" id="Vector_4" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.916667" />
        </g>
        <defs>
          <clipPath id="clip0_113_2470">
            <rect fill="white" height="11" width="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[15px] left-[13px] top-[90.8px] w-[230.25px]" data-name="Container">
      <Icon16 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-[17px] not-italic text-[#606060] text-[10px] top-0">16 Dic 2026</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-[#1a1a1a] h-[118.797px] relative rounded-[3px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Container43 />
      <Heading6 />
      <Container44 />
      <Container45 />
    </div>
  );
}

function Container40() {
  return (
    <div className="col-4 content-stretch flex flex-col gap-[9px] h-[418.391px] items-start justify-self-stretch relative row-1 shrink-0" data-name="Container">
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container11() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[418.391px] relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container18 />
      <Container33 />
      <Container40 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[446.891px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Container11 />
    </div>
  );
}

function Container9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1109px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip px-[24px] relative rounded-[inherit] size-full">
        <Container10 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] h-[655.781px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container1 />
        <Container9 />
      </div>
    </div>
  );
}

function PK() {
  return (
    <div className="bg-[#050505] h-[655.781px] relative shrink-0 w-full" data-name="pK">
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

function Container48() {
  return (
    <div className="h-[27px] relative shrink-0 w-[103.484px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[#2e7d32] text-[18px] top-px tracking-[1px]">SOLENIUM</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="bg-[rgba(46,125,50,0.15)] h-[19.5px] relative rounded-[3px] shrink-0 w-[57.469px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[13.5px] left-[6px] not-italic text-[#2e7d32] text-[9px] top-[3px] tracking-[0.5px]">PARTNER</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[72px] relative shrink-0 w-[239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center justify-center pb-px pr-[0.016px] relative size-full">
        <Container48 />
        <Container49 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-[12px] not-italic text-[#606060] text-[10px] top-0 tracking-[1px]">EXPLORADOR</p>
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[9.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_101_337)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p14d10c00} id="Vector_2" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M1.33333 8H14.6667" id="Vector_3" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_101_337">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[35px] relative rounded-[3px] shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Icon17 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[35px] not-italic text-[#808080] text-[12px] top-[8.5px]">Oportunidades</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[62px] items-start relative shrink-0 w-full" data-name="Container">
      <Container51 />
      <Link1 />
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-[12px] not-italic text-[#606060] text-[10px] top-0 tracking-[1px]">EJECUCIÓN</p>
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[9.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p22d15a20} id="Vector" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12 10L14.6667 7.33333" id="Vector_2" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pbc65580} id="Vector_3" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[35px] relative rounded-[3px] shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Icon18 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[35px] not-italic text-[#808080] text-[12px] top-[8.5px]">Proyectos Asignados</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[62px] items-start relative shrink-0 w-full" data-name="Container">
      <Container53 />
      <Link2 />
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-[12px] not-italic text-[#606060] text-[10px] top-0 tracking-[1px]">CUENTA</p>
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[9.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p37f49070} id="Vector" stroke="var(--stroke-0, #808080)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[35px] relative rounded-[3px] shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <Icon19 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[18px] left-[35px] not-italic text-[#808080] text-[12px] top-[8.5px]">Mi Perfil 360</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[62px] items-start relative shrink-0 w-full" data-name="Container">
      <Container55 />
      <Link3 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[239px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[18px] items-start overflow-clip pt-[18px] px-[12px] relative rounded-[inherit] size-full">
        <Container50 />
        <Container52 />
        <Container54 />
      </div>
    </div>
  );
}

function Icon20() {
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

function Button3() {
  return (
    <div className="relative rounded-[33554400px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon20 />
      </div>
    </div>
  );
}

function Icon21() {
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

function Button4() {
  return (
    <div className="bg-[#1d99cc] flex-[1_0_0] h-[28px] min-h-px min-w-px relative rounded-[33554400px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon21 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="bg-[#1a1a1a] h-[36px] relative rounded-[33554400px] shrink-0 w-[67px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[33554400px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[3px] items-center px-[4px] py-px relative size-full">
        <Button3 />
        <Button4 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex h-[36px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container58 />
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[18px] relative shrink-0 w-[119.016px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[12px] text-white top-0">Construcciones SAS</p>
      </div>
    </div>
  );
}

function Icon22() {
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

function Container60() {
  return (
    <div className="content-stretch flex h-[18px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container61 />
      <Icon22 />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[54.781px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[13.5px] left-0 not-italic text-[#808080] text-[9px] top-0 tracking-[0.5px] uppercase">SST Score</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[19.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[16.5px] left-0 text-[#2e7d32] text-[11px] top-0">86%</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex h-[16.5px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Container59() {
  return (
    <div className="bg-[#121212] h-[60.5px] relative rounded-[3px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="content-stretch flex flex-col gap-[6px] items-start pb-px pt-[10px] px-[13px] relative size-full">
        <Container60 />
        <Container62 />
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[30.5px] relative rounded-[3px] shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-[107.45px] not-italic text-[#808080] text-[11px] text-center top-[7px]">Cerrar Sesión</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[170px] relative shrink-0 w-[239px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[9px] items-start pt-[13px] px-[12px] relative size-full">
        <Container57 />
        <Container59 />
        <Link4 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bg-[#0a0a0a] content-stretch flex flex-col h-[632px] items-start left-0 pr-px top-0 w-[240px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.05)] border-r border-solid inset-0 pointer-events-none" />
      <Container47 />
      <Navigation />
      <Container56 />
    </div>
  );
}

export default function SetupSoleniumSolarversoSystem() {
  return (
    <div className="bg-white relative size-full" data-name="Setup Solenium Solarverso System">
      <Body />
      <Container46 />
    </div>
  );
}