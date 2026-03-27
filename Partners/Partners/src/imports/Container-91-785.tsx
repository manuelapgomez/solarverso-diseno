import svgPaths from "./svg-sdz0gexfo0";

function TableCell() {
  return (
    <div className="absolute h-[69px] left-0 top-0 w-[120px]" data-name="Table Cell">
      <p className="absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] left-[18px] text-[#1d99cc] text-[12px] top-[25.5px]">SST-002</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[12px] text-white top-0">Construcciones Andinas SAS</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#b0b0b0] text-[10px] top-0">Postulado: 27/1/2026</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[35px] items-start left-[18px] top-[17px] w-[541px]" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[69px] left-[120px] top-0 w-[577px]" data-name="Table Cell">
      <Container1 />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[21px] relative shrink-0 w-[25.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#00c853] text-[14px] top-[-1px]">92%</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[15px] relative shrink-0 w-[35.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#b0b0b0] text-[10px] top-0">Habilita</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[21px] items-center left-0 top-0 w-[144px]" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Container7() {
  return <div className="bg-[#00c853] h-[4.5px] shrink-0 w-full" data-name="Container" />;
}

function Container6() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col h-[4.5px] items-start left-0 overflow-clip pr-[9.609px] rounded-[33554400px] top-[24px] w-[120px]" data-name="Container">
      <Container7 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[28.5px] left-[18px] top-[20.25px] w-[144px]" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[69px] left-[697px] top-0 w-[180px]" data-name="Table Cell">
      <Container4 />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #00C853)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-25%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.66667 3.5">
            <path d={svgPaths.p21bae700} id="Vector" stroke="var(--stroke-0, #00C853)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[9px] size-[14px] top-[3.5px]" data-name="Text">
      <Icon />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[15px] left-[29px] top-[3px] w-[56.703px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-0 not-italic text-[#00c853] text-[10px] top-0 uppercase">Completo</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-[rgba(0,200,83,0.1)] border border-[#00c853] border-solid h-[23px] left-0 rounded-[3px] top-0 w-[96.703px]" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[15px] left-0 top-[29px] w-[124px]" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] left-0 text-[#b0b0b0] text-[10px] top-0">68/68 Verificados</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[44px] left-[18px] top-[12.5px] w-[124px]" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[69px] left-[877px] top-0 w-[160px]" data-name="Table Cell">
      <Container8 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute h-[14px] left-[12px] top-[6.5px] w-[8.875px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.875 14">
        <g clipPath="url(#clip0_91_797)" id="Icon">
          <path d={svgPaths.p211fdb00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.739583" />
          <path d={svgPaths.p10d55b00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.739583" />
        </g>
        <defs>
          <clipPath id="clip0_91_797">
            <rect fill="white" height="14" width="8.875" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#1d99cc] h-[27px] left-[18px] rounded-[3px] top-[21px] w-[84px]" data-name="Button">
      <Icon1 />
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[11px] left-[49.47px] not-italic text-[11px] text-center text-white top-[1.5px] w-[40px] whitespace-pre-wrap">Auditar Perfil</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[69px] left-[1037px] top-0 w-[120px]" data-name="Table Cell">
      <Button />
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid h-[69px] left-0 top-0 w-[1157px]" data-name="Table Row">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[69px] left-0 top-0 w-[120px]" data-name="Table Cell">
      <p className="absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] left-[18px] text-[#1d99cc] text-[12px] top-[25.5px]">SST-005</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[12px] text-white top-0">Ingeniería y Obras Colombia</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#b0b0b0] text-[10px] top-0">Postulado: 28/1/2026</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[35px] items-start left-[18px] top-[17px] w-[541px]" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[69px] left-[120px] top-0 w-[577px]" data-name="Table Cell">
      <Container11 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[21px] relative shrink-0 w-[25.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#1d99cc] text-[14px] top-[-1px]">88%</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[15px] relative shrink-0 w-[35.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#b0b0b0] text-[10px] top-0">Habilita</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[21px] items-center left-0 top-0 w-[144px]" data-name="Container">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Container17() {
  return <div className="bg-[#1d99cc] h-[4.5px] shrink-0 w-full" data-name="Container" />;
}

function Container16() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col h-[4.5px] items-start left-0 overflow-clip pr-[14.406px] rounded-[33554400px] top-[24px] w-[120px]" data-name="Container">
      <Container17 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[28.5px] left-[18px] top-[20.25px] w-[144px]" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[69px] left-[697px] top-0 w-[180px]" data-name="Table Cell">
      <Container14 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #FF9800)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-1/2 right-1/2 top-[33.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.58px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.16667 3.5">
            <path d="M0.583333 0.583333V2.91667" id="Vector" stroke="var(--stroke-0, #FF9800)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[33.33%] left-1/2 right-[49.96%] top-[66.67%]" data-name="Vector">
        <div className="absolute inset-[-0.58px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.1725 1.16667">
            <path d="M0.583333 0.583333H0.589167" id="Vector" stroke="var(--stroke-0, #FF9800)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[9px] size-[14px] top-[3.5px]" data-name="Text">
      <Icon2 />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute h-[15px] left-[29px] top-[3px] w-[67.125px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-0 not-italic text-[#ff9800] text-[10px] top-0 uppercase">Incompleto</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[rgba(255,152,0,0.1)] border border-[#ff9800] border-solid h-[23px] left-0 rounded-[3px] top-0 w-[107.125px]" data-name="Container">
      <Text6 />
      <Text7 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[15px] left-0 top-[29px] w-[124px]" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] left-0 text-[#b0b0b0] text-[10px] top-0">65/68 Verificados</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[44px] left-[18px] top-[12.5px] w-[124px]" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[69px] left-[877px] top-0 w-[160px]" data-name="Table Cell">
      <Container18 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute h-[14px] left-[12px] top-[6.5px] w-[8.875px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.875 14">
        <g clipPath="url(#clip0_91_797)" id="Icon">
          <path d={svgPaths.p211fdb00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.739583" />
          <path d={svgPaths.p10d55b00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.739583" />
        </g>
        <defs>
          <clipPath id="clip0_91_797">
            <rect fill="white" height="14" width="8.875" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#1d99cc] h-[27px] left-[18px] rounded-[3px] top-[21px] w-[84px]" data-name="Button">
      <Icon3 />
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[11px] left-[49.47px] not-italic text-[11px] text-center text-white top-[1.5px] w-[40px] whitespace-pre-wrap">Auditar Perfil</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[69px] left-[1037px] top-0 w-[120px]" data-name="Table Cell">
      <Button1 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid h-[69px] left-0 top-[69px] w-[1157px]" data-name="Table Row">
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[69px] left-0 top-0 w-[120px]" data-name="Table Cell">
      <p className="absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] left-[18px] text-[#1d99cc] text-[12px] top-[25.5px]">SST-008</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[12px] text-white top-0">Soluciones Técnicas del Valle</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#b0b0b0] text-[10px] top-0">Postulado: 29/1/2026</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[35px] items-start left-[18px] top-[17px] w-[541px]" data-name="Container">
      <Container22 />
      <Container23 />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[69px] left-[120px] top-0 w-[577px]" data-name="Table Cell">
      <Container21 />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[21px] relative shrink-0 w-[25.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#00c853] text-[14px] top-[-1px]">95%</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[15px] relative shrink-0 w-[35.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#b0b0b0] text-[10px] top-0">Habilita</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[21px] items-center left-0 top-0 w-[144px]" data-name="Container">
      <Text8 />
      <Text9 />
    </div>
  );
}

function Container27() {
  return <div className="bg-[#00c853] h-[4.5px] shrink-0 w-full" data-name="Container" />;
}

function Container26() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col h-[4.5px] items-start left-0 overflow-clip pr-[6px] rounded-[33554400px] top-[24px] w-[120px]" data-name="Container">
      <Container27 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[28.5px] left-[18px] top-[20.25px] w-[144px]" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[69px] left-[697px] top-0 w-[180px]" data-name="Table Cell">
      <Container24 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #00C853)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-25%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.66667 3.5">
            <path d={svgPaths.p21bae700} id="Vector" stroke="var(--stroke-0, #00C853)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[9px] size-[14px] top-[3.5px]" data-name="Text">
      <Icon4 />
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute h-[15px] left-[29px] top-[3px] w-[56.703px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-0 not-italic text-[#00c853] text-[10px] top-0 uppercase">Completo</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-[rgba(0,200,83,0.1)] border border-[#00c853] border-solid h-[23px] left-0 rounded-[3px] top-0 w-[96.703px]" data-name="Container">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[15px] left-0 top-[29px] w-[124px]" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] left-0 text-[#b0b0b0] text-[10px] top-0">68/68 Verificados</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[44px] left-[18px] top-[12.5px] w-[124px]" data-name="Container">
      <Container29 />
      <Container30 />
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[69px] left-[877px] top-0 w-[160px]" data-name="Table Cell">
      <Container28 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute h-[14px] left-[12px] top-[6.5px] w-[8.875px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.875 14">
        <g clipPath="url(#clip0_91_797)" id="Icon">
          <path d={svgPaths.p211fdb00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.739583" />
          <path d={svgPaths.p10d55b00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.739583" />
        </g>
        <defs>
          <clipPath id="clip0_91_797">
            <rect fill="white" height="14" width="8.875" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#1d99cc] h-[27px] left-[18px] rounded-[3px] top-[21px] w-[84px]" data-name="Button">
      <Icon5 />
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[11px] left-[49.47px] not-italic text-[11px] text-center text-white top-[1.5px] w-[40px] whitespace-pre-wrap">Auditar Perfil</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[69px] left-[1037px] top-0 w-[120px]" data-name="Table Cell">
      <Button2 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid h-[69px] left-0 top-[138px] w-[1157px]" data-name="Table Row">
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[69px] left-0 top-0 w-[120px]" data-name="Table Cell">
      <p className="absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] left-[18px] text-[#1d99cc] text-[12px] top-[25.5px]">SST-012</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[12px] text-white top-0">Maquinaria Pesada del Pacífico</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#b0b0b0] text-[10px] top-0">Postulado: 31/1/2026</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[35px] items-start left-[18px] top-[17px] w-[541px]" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[69px] left-[120px] top-0 w-[577px]" data-name="Table Cell">
      <Container31 />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[21px] relative shrink-0 w-[25.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#1d99cc] text-[14px] top-[-1px]">87%</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[15px] relative shrink-0 w-[35.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#b0b0b0] text-[10px] top-0">Habilita</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[21px] items-center left-0 top-0 w-[144px]" data-name="Container">
      <Text12 />
      <Text13 />
    </div>
  );
}

function Container37() {
  return <div className="bg-[#1d99cc] h-[4.5px] shrink-0 w-full" data-name="Container" />;
}

function Container36() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col h-[4.5px] items-start left-0 overflow-clip pr-[15.609px] rounded-[33554400px] top-[24px] w-[120px]" data-name="Container">
      <Container37 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[28.5px] left-[18px] top-[20.25px] w-[144px]" data-name="Container">
      <Container35 />
      <Container36 />
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[69px] left-[697px] top-0 w-[180px]" data-name="Table Cell">
      <Container34 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #FF9800)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-1/2 right-1/2 top-[33.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.58px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.16667 3.5">
            <path d="M0.583333 0.583333V2.91667" id="Vector" stroke="var(--stroke-0, #FF9800)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[33.33%] left-1/2 right-[49.96%] top-[66.67%]" data-name="Vector">
        <div className="absolute inset-[-0.58px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.1725 1.16667">
            <path d="M0.583333 0.583333H0.589167" id="Vector" stroke="var(--stroke-0, #FF9800)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[9px] size-[14px] top-[3.5px]" data-name="Text">
      <Icon6 />
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute h-[15px] left-[29px] top-[3px] w-[67.125px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-0 not-italic text-[#ff9800] text-[10px] top-0 uppercase">Incompleto</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute bg-[rgba(255,152,0,0.1)] border border-[#ff9800] border-solid h-[23px] left-0 rounded-[3px] top-0 w-[107.125px]" data-name="Container">
      <Text14 />
      <Text15 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[15px] left-0 top-[29px] w-[124px]" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] left-0 text-[#b0b0b0] text-[10px] top-0">60/68 Verificados</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[44px] left-[18px] top-[12.5px] w-[124px]" data-name="Container">
      <Container39 />
      <Container40 />
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[69px] left-[877px] top-0 w-[160px]" data-name="Table Cell">
      <Container38 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute h-[14px] left-[12px] top-[6.5px] w-[8.875px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.875 14">
        <g clipPath="url(#clip0_91_797)" id="Icon">
          <path d={svgPaths.p211fdb00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.739583" />
          <path d={svgPaths.p10d55b00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.739583" />
        </g>
        <defs>
          <clipPath id="clip0_91_797">
            <rect fill="white" height="14" width="8.875" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#1d99cc] h-[27px] left-[18px] rounded-[3px] top-[21px] w-[84px]" data-name="Button">
      <Icon7 />
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[11px] left-[49.47px] not-italic text-[11px] text-center text-white top-[1.5px] w-[40px] whitespace-pre-wrap">Auditar Perfil</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[69px] left-[1037px] top-0 w-[120px]" data-name="Table Cell">
      <Button3 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid h-[69px] left-0 top-[207px] w-[1157px]" data-name="Table Row">
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[69px] left-0 top-0 w-[120px]" data-name="Table Cell">
      <p className="absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] left-[18px] text-[#1d99cc] text-[12px] top-[25.5px]">SST-015</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[12px] text-white top-0">Constructora Valle Verde</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#b0b0b0] text-[10px] top-0">Postulado: 2/2/2026</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[35px] items-start left-[18px] top-[17px] w-[541px]" data-name="Container">
      <Container42 />
      <Container43 />
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[69px] left-[120px] top-0 w-[577px]" data-name="Table Cell">
      <Container41 />
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[21px] relative shrink-0 w-[25.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#00c853] text-[14px] top-[-1px]">90%</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[15px] relative shrink-0 w-[35.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#b0b0b0] text-[10px] top-0">Habilita</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[21px] items-center left-0 top-0 w-[144px]" data-name="Container">
      <Text16 />
      <Text17 />
    </div>
  );
}

function Container47() {
  return <div className="bg-[#00c853] h-[4.5px] shrink-0 w-full" data-name="Container" />;
}

function Container46() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col h-[4.5px] items-start left-0 overflow-clip pr-[12px] rounded-[33554400px] top-[24px] w-[120px]" data-name="Container">
      <Container47 />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[28.5px] left-[18px] top-[20.25px] w-[144px]" data-name="Container">
      <Container45 />
      <Container46 />
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[69px] left-[697px] top-0 w-[180px]" data-name="Table Cell">
      <Container44 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #B0B0B0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[41.67%] left-1/2 right-[33.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-12.5%_-25.01%_-12.5%_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.50013 5.83346">
            <path d={svgPaths.pefda580} id="Vector" stroke="var(--stroke-0, #B0B0B0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[9px] size-[14px] top-[3.5px]" data-name="Text">
      <Icon8 />
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute h-[15px] left-[29px] top-[3px] w-[56.656px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-0 not-italic text-[#b0b0b0] text-[10px] top-0 uppercase">Pendiente</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.2)] border-solid h-[23px] left-0 rounded-[3px] top-0 w-[96.656px]" data-name="Container">
      <Text18 />
      <Text19 />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute h-[15px] left-0 top-[29px] w-[124px]" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] left-0 text-[#b0b0b0] text-[10px] top-0">45/68 Verificados</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute h-[44px] left-[18px] top-[12.5px] w-[124px]" data-name="Container">
      <Container49 />
      <Container50 />
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[69px] left-[877px] top-0 w-[160px]" data-name="Table Cell">
      <Container48 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute h-[14px] left-[12px] top-[6.5px] w-[8.875px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.875 14">
        <g clipPath="url(#clip0_91_797)" id="Icon">
          <path d={svgPaths.p211fdb00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.739583" />
          <path d={svgPaths.p10d55b00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.739583" />
        </g>
        <defs>
          <clipPath id="clip0_91_797">
            <rect fill="white" height="14" width="8.875" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#1d99cc] h-[27px] left-[18px] rounded-[3px] top-[21px] w-[84px]" data-name="Button">
      <Icon9 />
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[11px] left-[49.47px] not-italic text-[11px] text-center text-white top-[1.5px] w-[40px] whitespace-pre-wrap">Auditar Perfil</p>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[69px] left-[1037px] top-0 w-[120px]" data-name="Table Cell">
      <Button4 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid h-[69px] left-0 top-[276px] w-[1157px]" data-name="Table Row">
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[69px] left-0 top-0 w-[120px]" data-name="Table Cell">
      <p className="absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] left-[18px] text-[#1d99cc] text-[12px] top-[25.5px]">SST-018</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[12px] text-white top-0">Equipos y Servicios Industriales</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#b0b0b0] text-[10px] top-0">Postulado: 3/2/2026</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[35px] items-start left-[18px] top-[17px] w-[541px]" data-name="Container">
      <Container52 />
      <Container53 />
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[69px] left-[120px] top-0 w-[577px]" data-name="Table Cell">
      <Container51 />
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[21px] relative shrink-0 w-[25.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#00c853] text-[14px] top-[-1px]">93%</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[15px] relative shrink-0 w-[35.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#b0b0b0] text-[10px] top-0">Habilita</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[21px] items-center left-0 top-0 w-[144px]" data-name="Container">
      <Text20 />
      <Text21 />
    </div>
  );
}

function Container57() {
  return <div className="bg-[#00c853] h-[4.5px] shrink-0 w-full" data-name="Container" />;
}

function Container56() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col h-[4.5px] items-start left-0 overflow-clip pr-[8.406px] rounded-[33554400px] top-[24px] w-[120px]" data-name="Container">
      <Container57 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[28.5px] left-[18px] top-[20.25px] w-[144px]" data-name="Container">
      <Container55 />
      <Container56 />
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[69px] left-[697px] top-0 w-[180px]" data-name="Table Cell">
      <Container54 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #00C853)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-25%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.66667 3.5">
            <path d={svgPaths.p21bae700} id="Vector" stroke="var(--stroke-0, #00C853)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[9px] size-[14px] top-[3.5px]" data-name="Text">
      <Icon10 />
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute h-[15px] left-[29px] top-[3px] w-[56.703px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-0 not-italic text-[#00c853] text-[10px] top-0 uppercase">Completo</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute bg-[rgba(0,200,83,0.1)] border border-[#00c853] border-solid h-[23px] left-0 rounded-[3px] top-0 w-[96.703px]" data-name="Container">
      <Text22 />
      <Text23 />
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute h-[15px] left-0 top-[29px] w-[124px]" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] left-0 text-[#b0b0b0] text-[10px] top-0">68/68 Verificados</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute h-[44px] left-[18px] top-[12.5px] w-[124px]" data-name="Container">
      <Container59 />
      <Container60 />
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[69px] left-[877px] top-0 w-[160px]" data-name="Table Cell">
      <Container58 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute h-[14px] left-[12px] top-[6.5px] w-[8.875px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.875 14">
        <g clipPath="url(#clip0_91_797)" id="Icon">
          <path d={svgPaths.p211fdb00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.739583" />
          <path d={svgPaths.p10d55b00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.739583" />
        </g>
        <defs>
          <clipPath id="clip0_91_797">
            <rect fill="white" height="14" width="8.875" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#1d99cc] h-[27px] left-[18px] rounded-[3px] top-[21px] w-[84px]" data-name="Button">
      <Icon11 />
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[11px] left-[49.47px] not-italic text-[11px] text-center text-white top-[1.5px] w-[40px] whitespace-pre-wrap">Auditar Perfil</p>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[69px] left-[1037px] top-0 w-[120px]" data-name="Table Cell">
      <Button5 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid h-[69px] left-0 top-[345px] w-[1157px]" data-name="Table Row">
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[69px] left-0 top-0 w-[120px]" data-name="Table Cell">
      <p className="absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] left-[18px] text-[#1d99cc] text-[12px] top-[25.5px]">SST-021</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[12px] text-white top-0">Obras Civiles del Cauca</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#b0b0b0] text-[10px] top-0">Postulado: 4/2/2026</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[35px] items-start left-[18px] top-[17px] w-[541px]" data-name="Container">
      <Container62 />
      <Container63 />
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[69px] left-[120px] top-0 w-[577px]" data-name="Table Cell">
      <Container61 />
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[21px] relative shrink-0 w-[25.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#1d99cc] text-[14px] top-[-1px]">86%</p>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[15px] relative shrink-0 w-[35.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#b0b0b0] text-[10px] top-0">Habilita</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[21px] items-center left-0 top-0 w-[144px]" data-name="Container">
      <Text24 />
      <Text25 />
    </div>
  );
}

function Container67() {
  return <div className="bg-[#1d99cc] h-[4.5px] shrink-0 w-full" data-name="Container" />;
}

function Container66() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col h-[4.5px] items-start left-0 overflow-clip pr-[16.813px] rounded-[33554400px] top-[24px] w-[120px]" data-name="Container">
      <Container67 />
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute h-[28.5px] left-[18px] top-[20.25px] w-[144px]" data-name="Container">
      <Container65 />
      <Container66 />
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute h-[69px] left-[697px] top-0 w-[180px]" data-name="Table Cell">
      <Container64 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #FF9800)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-1/2 right-1/2 top-[33.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.58px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.16667 3.5">
            <path d="M0.583333 0.583333V2.91667" id="Vector" stroke="var(--stroke-0, #FF9800)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[33.33%] left-1/2 right-[49.96%] top-[66.67%]" data-name="Vector">
        <div className="absolute inset-[-0.58px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.1725 1.16667">
            <path d="M0.583333 0.583333H0.589167" id="Vector" stroke="var(--stroke-0, #FF9800)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[9px] size-[14px] top-[3.5px]" data-name="Text">
      <Icon12 />
    </div>
  );
}

function Text27() {
  return (
    <div className="absolute h-[15px] left-[29px] top-[3px] w-[67.125px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-0 not-italic text-[#ff9800] text-[10px] top-0 uppercase">Incompleto</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute bg-[rgba(255,152,0,0.1)] border border-[#ff9800] border-solid h-[23px] left-0 rounded-[3px] top-0 w-[107.125px]" data-name="Container">
      <Text26 />
      <Text27 />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute h-[15px] left-0 top-[29px] w-[124px]" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] left-0 text-[#b0b0b0] text-[10px] top-0">58/68 Verificados</p>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute h-[44px] left-[18px] top-[12.5px] w-[124px]" data-name="Container">
      <Container69 />
      <Container70 />
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute h-[69px] left-[877px] top-0 w-[160px]" data-name="Table Cell">
      <Container68 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute h-[14px] left-[12px] top-[6.5px] w-[8.875px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.875 14">
        <g clipPath="url(#clip0_91_797)" id="Icon">
          <path d={svgPaths.p211fdb00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.739583" />
          <path d={svgPaths.p10d55b00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.739583" />
        </g>
        <defs>
          <clipPath id="clip0_91_797">
            <rect fill="white" height="14" width="8.875" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[#1d99cc] h-[27px] left-[18px] rounded-[3px] top-[21px] w-[84px]" data-name="Button">
      <Icon13 />
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[11px] left-[49.47px] not-italic text-[11px] text-center text-white top-[1.5px] w-[40px] whitespace-pre-wrap">Auditar Perfil</p>
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute h-[69px] left-[1037px] top-0 w-[120px]" data-name="Table Cell">
      <Button6 />
    </div>
  );
}

function TableRow6() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid h-[69px] left-0 top-[414px] w-[1157px]" data-name="Table Row">
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
    </div>
  );
}

function TableCell35() {
  return (
    <div className="absolute h-[69px] left-0 top-0 w-[120px]" data-name="Table Cell">
      <p className="absolute font-['JetBrains_Mono:Medium',sans-serif] font-medium leading-[18px] left-[18px] text-[#1d99cc] text-[12px] top-[25.5px]">SST-024</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[12px] text-white top-0">Infraestructura Solar SAS</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[15px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#b0b0b0] text-[10px] top-0">Postulado: 5/2/2026</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] h-[35px] items-start left-[18px] top-[17px] w-[541px]" data-name="Container">
      <Container72 />
      <Container73 />
    </div>
  );
}

function TableCell36() {
  return (
    <div className="absolute h-[69px] left-[120px] top-0 w-[577px]" data-name="Table Cell">
      <Container71 />
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[21px] relative shrink-0 w-[25.219px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[21px] left-0 text-[#00c853] text-[14px] top-[-1px]">91%</p>
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[15px] relative shrink-0 w-[35.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#b0b0b0] text-[10px] top-0">Habilita</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[21px] items-center left-0 top-0 w-[144px]" data-name="Container">
      <Text28 />
      <Text29 />
    </div>
  );
}

function Container77() {
  return <div className="bg-[#00c853] h-[4.5px] shrink-0 w-full" data-name="Container" />;
}

function Container76() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] content-stretch flex flex-col h-[4.5px] items-start left-0 overflow-clip pr-[10.813px] rounded-[33554400px] top-[24px] w-[120px]" data-name="Container">
      <Container77 />
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute h-[28.5px] left-[18px] top-[20.25px] w-[144px]" data-name="Container">
      <Container75 />
      <Container76 />
    </div>
  );
}

function TableCell37() {
  return (
    <div className="absolute h-[69px] left-[697px] top-0 w-[180px]" data-name="Table Cell">
      <Container74 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8333 12.8333">
            <path d={svgPaths.p13f5b400} id="Vector" stroke="var(--stroke-0, #00C853)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-25%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.66667 3.5">
            <path d={svgPaths.p21bae700} id="Vector" stroke="var(--stroke-0, #00C853)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[9px] size-[14px] top-[3.5px]" data-name="Text">
      <Icon14 />
    </div>
  );
}

function Text31() {
  return (
    <div className="absolute h-[15px] left-[29px] top-[3px] w-[56.703px]" data-name="Text">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-0 not-italic text-[#00c853] text-[10px] top-0 uppercase">Completo</p>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute bg-[rgba(0,200,83,0.1)] border border-[#00c853] border-solid h-[23px] left-0 rounded-[3px] top-0 w-[96.703px]" data-name="Container">
      <Text30 />
      <Text31 />
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute h-[15px] left-0 top-[29px] w-[124px]" data-name="Container">
      <p className="absolute font-['JetBrains_Mono:Regular',sans-serif] font-normal leading-[15px] left-0 text-[#b0b0b0] text-[10px] top-0">68/68 Verificados</p>
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute h-[44px] left-[18px] top-[12.5px] w-[124px]" data-name="Container">
      <Container79 />
      <Container80 />
    </div>
  );
}

function TableCell38() {
  return (
    <div className="absolute h-[69px] left-[877px] top-0 w-[160px]" data-name="Table Cell">
      <Container78 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute h-[14px] left-[12px] top-[6.5px] w-[8.875px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.875 14">
        <g clipPath="url(#clip0_91_797)" id="Icon">
          <path d={svgPaths.p211fdb00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.739583" />
          <path d={svgPaths.p10d55b00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.739583" />
        </g>
        <defs>
          <clipPath id="clip0_91_797">
            <rect fill="white" height="14" width="8.875" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[#1d99cc] h-[27px] left-[18px] rounded-[3px] top-[21px] w-[84px]" data-name="Button">
      <Icon15 />
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[11px] left-[49.47px] not-italic text-[11px] text-center text-white top-[1.5px] w-[40px] whitespace-pre-wrap">Auditar Perfil</p>
    </div>
  );
}

function TableCell39() {
  return (
    <div className="absolute h-[69px] left-[1037px] top-0 w-[120px]" data-name="Table Cell">
      <Button7 />
    </div>
  );
}

function TableRow7() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid h-[69px] left-0 top-[483px] w-[1157px]" data-name="Table Row">
      <TableCell35 />
      <TableCell36 />
      <TableCell37 />
      <TableCell38 />
      <TableCell39 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[552px] left-0 top-[48.5px] w-[1157px]" data-name="Table Body">
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
    <div className="absolute h-[601px] left-0 top-0 w-[1157px]" data-name="Table">
      <TableBody />
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid h-[48.5px] left-0 top-0 w-[120px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-[18px] not-italic text-[#b0b0b0] text-[10px] top-[16.5px] tracking-[0.5px] uppercase">ID Partner</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid h-[48.5px] left-[120px] top-0 w-[577px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-[18px] not-italic text-[#b0b0b0] text-[10px] top-[16.5px] tracking-[0.5px] uppercase">Nombre Comercial</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid h-[48.5px] left-[697px] top-0 w-[180px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-[18px] not-italic text-[#b0b0b0] text-[10px] top-[16.5px] tracking-[0.5px] uppercase">SST Score</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid h-[48.5px] left-[877px] top-0 w-[160px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-[18px] not-italic text-[#b0b0b0] text-[10px] top-[9px] tracking-[0.5px] uppercase w-[77px] whitespace-pre-wrap">Estatus Documental</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute border-[rgba(255,255,255,0.05)] border-b border-solid h-[48.5px] left-[1037px] top-0 w-[120px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[15px] left-[18px] not-italic text-[#b0b0b0] text-[10px] top-[16.5px] tracking-[0.5px] uppercase">Acción</p>
    </div>
  );
}

function TableRow8() {
  return (
    <div className="absolute bg-[#1e1e1e] h-[48.5px] left-0 top-0 w-[1157px]" data-name="Table Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[48.5px] left-0 top-0 w-[1157px]" data-name="Table Header">
      <TableRow8 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <Table />
      <TableHeader />
    </div>
  );
}