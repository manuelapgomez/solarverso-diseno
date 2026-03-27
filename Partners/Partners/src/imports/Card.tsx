import svgPaths from "./svg-qlyri0wyp1";

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pcfbcf00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pd2076c0} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="relative shrink-0" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">
        <Icon />
        <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">Lista de Documentos</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[#f8fafc] h-[36px] left-0 rounded-[10px] top-0 w-[300px]" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip pl-[30px] pr-[12px] py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Arial:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[14px]">Buscar por nombre, código o ubicación...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(30,41,59,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[12px] size-[12px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M10.5 10.5L8.33 8.33" id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p1c92f080} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[300px]" data-name="Container">
      <Input />
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.pfeb0280} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#fafbfc] content-stretch flex items-center px-[13px] py-[12px] relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(30,41,59,0.1)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Icon2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0">
      <Button />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[18px] items-center relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Frame />
    </div>
  );
}

function Filtros() {
  return (
    <div className="relative shrink-0 w-[379px]" data-name="filtros">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container />
      </div>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[21px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border border-[#b3b3b3] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function TableHead() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-end left-[6px] px-[8px] py-[6px] top-[3px]" data-name="TableHead">
      <Checkbox />
    </div>
  );
}

function TableHead1() {
  return (
    <div className="absolute h-[40px] left-[48px] top-0 w-[99px]" data-name="TableHead">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[18px] left-[8px] not-italic text-[#0a0a0a] text-[14px] top-[7.75px]">Documento</p>
    </div>
  );
}

function TableHead2() {
  return <div className="absolute h-[40px] left-[384px] top-0 w-[46px]" data-name="TableHead" />;
}

function TableHead3() {
  return (
    <div className="absolute h-[40px] left-[407px] top-0 w-[59px]" data-name="TableHead">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[18px] left-[8px] not-italic text-[#0a0a0a] text-[14px] top-[7.75px]">Fecha</p>
    </div>
  );
}

function TableHead4() {
  return (
    <div className="absolute h-[40px] left-[548px] top-0 w-[108px]" data-name="TableHead">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[18px] left-[8px] not-italic text-[#0a0a0a] text-[14px] top-[7.75px]">Comentarios</p>
    </div>
  );
}

function TableHead5() {
  return (
    <div className="absolute h-[40px] left-[881px] top-[-6px] w-[92px]" data-name="TableHead">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[18px] left-[8px] not-italic text-[#0a0a0a] text-[14px] top-[7.75px]">Valoración</p>
    </div>
  );
}

function TableHead6() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[1076px] px-[7px] py-[8px] top-0 w-[81px]" data-name="TableHead">
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-right">Acciones</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <TableHead />
      <TableHead1 />
      <TableHead2 />
      <TableHead3 />
      <TableHead4 />
      <TableHead5 />
      <TableHead6 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[1222px]" data-name="TableHeader">
      <TableRow />
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[21px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border border-[#b3b3b3] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function TableCell() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[13px] py-[18px] relative shrink-0" data-name="TableCell">
      <Checkbox1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#0a0a0a] text-[15px] whitespace-pre-wrap">Certificado ARL - Empresa ABC</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#717182] text-[10px] whitespace-pre-wrap">2.5 MB</p>
    </div>
  );
}

function SstDocumentsList() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="SSTDocumentsList">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] py-[9px] relative shrink-0 w-[333px]" data-name="TableCell">
      <SstDocumentsList />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[71.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a0a0a] text-[13px]">2024-01-15</p>
      </div>
    </div>
  );
}

function SstDocumentsList1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="SSTDocumentsList">
      <Icon3 />
      <Text />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[19px] relative shrink-0 w-[150px]" data-name="TableCell">
      <SstDocumentsList1 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38026c00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SstDocumentsList2() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[34px] top-[8px] w-[90.188px]" data-name="SSTDocumentsList">
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">2 comentarios</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[240px]" data-name="Button">
      <Icon4 />
      <SstDocumentsList2 />
    </div>
  );
}

function TableCell3() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[11px] relative shrink-0" data-name="TableCell">
      <Button1 />
    </div>
  );
}

function VuesaxBoldTickCircle1() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/tick-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="tick-circle">
          <path d={svgPaths.p24bf8000} fill="var(--fill-0, #3BB339)" id="Vector" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxBoldTickCircle() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="vuesax/bold/tick-circle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <VuesaxBoldTickCircle1 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] h-full items-start relative">
        <VuesaxBoldTickCircle />
        <p className="font-['Poppins:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#008236] text-[12px]">Cumple</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#dcfce7] h-[32px] relative rounded-[8px] shrink-0 w-[152px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[8px] relative size-full">
        <Text1 />
      </div>
    </div>
  );
}

function VuesaxLinearStar1() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="star">
          <path d={svgPaths.p5e49780} id="Vector" stroke="var(--stroke-0, #FD9C10)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearStar() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="vuesax/linear/star">
      <VuesaxLinearStar1 />
    </div>
  );
}

function VuesaxLinearArrowRight1() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="arrow-right">
          <path d={svgPaths.p205b6200} id="Vector" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearArrowRight() {
  return (
    <div className="relative size-[14px]" data-name="vuesax/linear/arrow-right">
      <VuesaxLinearArrowRight1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center p-[8px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#b3b3b3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <VuesaxLinearStar />
      <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a0a0a] text-[13px]">5</p>
      <div className="flex items-center justify-center relative shrink-0 size-[14px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <VuesaxLinearArrowRight />
        </div>
      </div>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="h-[60px] relative shrink-0" data-name="TableCell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center relative">
        <Frame1 />
      </div>
    </div>
  );
}

function Calificar() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0" data-name="calificar">
      <Container2 />
      <TableCell5 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="content-stretch flex items-center px-[25px] py-[14px] relative shrink-0 w-[280px]" data-name="TableCell">
      <Calificar />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_146_1037)" id="Icon">
          <path d={svgPaths.p9b47a00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p15e62a80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_146_1037">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[28px] opacity-50 relative rounded-[8px] shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function SstDocumentsList3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-end relative shrink-0" data-name="SSTDocumentsList">
      <Button2 />
      <Button3 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[13px] relative shrink-0" data-name="TableCell">
      <SstDocumentsList3 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="bg-[#f0fdf4] content-stretch flex items-center justify-center relative shrink-0" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[#00c950] border-b border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell6 />
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[21px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border border-[#b3b3b3] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[13px] py-[18px] relative shrink-0" data-name="TableCell">
      <Checkbox2 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#0a0a0a] text-[15px] whitespace-pre-wrap">Plan de Seguridad Industrial</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#717182] text-[10px] whitespace-pre-wrap">5.2 MB</p>
    </div>
  );
}

function SstDocumentsList4() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="SSTDocumentsList">
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] py-[9px] relative shrink-0 w-[333px]" data-name="TableCell">
      <SstDocumentsList4 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[71.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a0a0a] text-[13px]">2024-01-14</p>
      </div>
    </div>
  );
}

function SstDocumentsList5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="SSTDocumentsList">
      <Icon7 />
      <Text2 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[19px] relative shrink-0 w-[150px]" data-name="TableCell">
      <SstDocumentsList5 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[11px] size-[16px] top-[11px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38026c00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SstDocumentsList6() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[35px] top-[9px] w-[90.188px]" data-name="SSTDocumentsList">
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">3 comentarios</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#fef2f2] h-[38px] relative rounded-[8px] shrink-0 w-[240px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ffa2a2] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Icon8 />
      <SstDocumentsList6 />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[10px] relative shrink-0" data-name="TableCell">
      <Button4 />
    </div>
  );
}

function VuesaxBoldCloseCircle1() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/close-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="close-circle">
          <path d={svgPaths.pee24100} fill="var(--fill-0, #DE4639)" id="Vector" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxBoldCloseCircle() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="vuesax/bold/close-circle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <VuesaxBoldCloseCircle1 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16px] relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] h-full items-start relative">
        <VuesaxBoldCloseCircle />
        <p className="font-['Poppins:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#c10007] text-[12px]">No cumple</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#ffe2e2] h-[32px] relative rounded-[8px] shrink-0 w-[152px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[8px] relative size-full">
        <Text3 />
      </div>
    </div>
  );
}

function VuesaxLinearStar3() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="star">
          <path d={svgPaths.p5e49780} id="Vector" stroke="var(--stroke-0, #FD9C10)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearStar2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="vuesax/linear/star">
      <VuesaxLinearStar3 />
    </div>
  );
}

function VuesaxLinearArrowRight3() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="arrow-right">
          <path d={svgPaths.p205b6200} id="Vector" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearArrowRight2() {
  return (
    <div className="relative size-[14px]" data-name="vuesax/linear/arrow-right">
      <VuesaxLinearArrowRight3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center p-[8px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#b3b3b3] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <VuesaxLinearStar2 />
      <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a0a0a] text-[13px]">1</p>
      <div className="flex items-center justify-center relative shrink-0 size-[14px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "154" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <VuesaxLinearArrowRight2 />
        </div>
      </div>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="h-[60px] relative shrink-0" data-name="TableCell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center relative">
        <Frame2 />
      </div>
    </div>
  );
}

function Calificar1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="calificar">
      <Container3 />
      <TableCell12 />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="content-stretch flex flex-col items-start px-[25px] py-[14px] relative shrink-0 w-[280px]" data-name="TableCell">
      <Calificar1 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_146_1037)" id="Icon">
          <path d={svgPaths.p9b47a00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p15e62a80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_146_1037">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[28px] opacity-50 relative rounded-[8px] shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function SstDocumentsList7() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-end relative shrink-0" data-name="SSTDocumentsList">
      <Button5 />
      <Button6 />
    </div>
  );
}

function TableCell13() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[13px] relative shrink-0" data-name="TableCell">
      <SstDocumentsList7 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="bg-[#fef2f2] content-stretch flex items-center justify-center relative shrink-0" data-name="TableRow">
      <div aria-hidden="true" className="absolute border-[#fb2c36] border-b border-solid inset-0 pointer-events-none" />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell13 />
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[21px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border border-[#b3b3b3] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[13px] py-[18px] relative shrink-0" data-name="TableCell">
      <Checkbox3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#0a0a0a] text-[15px] whitespace-pre-wrap">Certificado ARL - Empresa ABC</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#717182] text-[10px] whitespace-pre-wrap">2.5 MB</p>
    </div>
  );
}

function SstDocumentsList8() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="SSTDocumentsList">
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] py-[9px] relative shrink-0 w-[333px]" data-name="TableCell">
      <SstDocumentsList8 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[71.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a0a0a] text-[13px]">2024-01-15</p>
      </div>
    </div>
  );
}

function SstDocumentsList9() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="SSTDocumentsList">
      <Icon11 />
      <Text4 />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[19px] relative shrink-0 w-[150px]" data-name="TableCell">
      <SstDocumentsList9 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38026c00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SstDocumentsList10() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[34px] top-[8px] w-[90.188px]" data-name="SSTDocumentsList">
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">2 comentarios</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[240px]" data-name="Button">
      <Icon12 />
      <SstDocumentsList10 />
    </div>
  );
}

function TableCell17() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[11px] relative shrink-0" data-name="TableCell">
      <Button7 />
    </div>
  );
}

function VuesaxLinearClipboardImport1() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/clipboard-import">
      <div className="absolute inset-[-0.25%_0_0_-4.41%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.75 17.0417">
          <g id="clipboard-import">
            <path d={svgPaths.p3d0b9c80} id="Vector" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
            <path d={svgPaths.p4f6c580} id="Vector_2" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
            <path d={svgPaths.p8a8d6c0} id="Vector_3" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
            <path d={svgPaths.p1eaaaa80} id="Vector_4" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
            <g id="Vector_5" opacity="0" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function VuesaxLinearClipboardImport() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="vuesax/linear/clipboard-import">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <VuesaxLinearClipboardImport1 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-start relative">
        <VuesaxLinearClipboardImport />
        <p className="font-['Poppins:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#848484] text-[12px]">No aplica</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#e0e0e0] h-[32px] relative rounded-[8px] shrink-0 w-[152px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[8px] relative size-full">
        <Text5 />
      </div>
    </div>
  );
}

function Calificar2() {
  return (
    <div className="content-stretch flex h-[32px] items-center relative shrink-0" data-name="calificar">
      <Container4 />
    </div>
  );
}

function TableCell18() {
  return (
    <div className="content-stretch flex items-center px-[25px] py-[14px] relative shrink-0 w-[280px]" data-name="TableCell">
      <Calificar2 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_146_1037)" id="Icon">
          <path d={svgPaths.p9b47a00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p15e62a80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_146_1037">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[28px] opacity-50 relative rounded-[8px] shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function SstDocumentsList11() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-end relative shrink-0" data-name="SSTDocumentsList">
      <Button8 />
      <Button9 />
    </div>
  );
}

function TableCell19() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[13px] relative shrink-0" data-name="TableCell">
      <SstDocumentsList11 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="TableRow">
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[21px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border border-[#b3b3b3] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[13px] py-[18px] relative shrink-0" data-name="TableCell">
      <Checkbox4 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex h-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#0a0a0a] text-[15px] whitespace-pre-wrap">Certificado ARL - Empresa ABC</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#717182] text-[10px] whitespace-pre-wrap">2.5 MB</p>
    </div>
  );
}

function SstDocumentsList12() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="SSTDocumentsList">
      <Paragraph6 />
      <Paragraph7 />
    </div>
  );
}

function TableCell21() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] py-[9px] relative shrink-0 w-[333px]" data-name="TableCell">
      <SstDocumentsList12 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[71.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a0a0a] text-[13px]">2024-01-15</p>
      </div>
    </div>
  );
}

function SstDocumentsList13() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="SSTDocumentsList">
      <Icon15 />
      <Text6 />
    </div>
  );
}

function TableCell22() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[19px] relative shrink-0 w-[150px]" data-name="TableCell">
      <SstDocumentsList13 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38026c00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SstDocumentsList14() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[34px] top-[8px] w-[90.188px]" data-name="SSTDocumentsList">
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">2 comentarios</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[240px]" data-name="Button">
      <Icon16 />
      <SstDocumentsList14 />
    </div>
  );
}

function TableCell23() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[11px] relative shrink-0" data-name="TableCell">
      <Button10 />
    </div>
  );
}

function VuesaxLinearArrowDown1() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="arrow-down">
          <path d={svgPaths.p8bf7900} id="Vector" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearArrowDown() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="vuesax/linear/arrow-down">
      <VuesaxLinearArrowDown1 />
    </div>
  );
}

function Option() {
  return (
    <div className="absolute left-[-1272.41px] size-0 top-[-844px]" data-name="Option">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#1e1e1e] text-[14px] top-0 w-0 whitespace-pre-wrap">Seleccionar valoración</p>
    </div>
  );
}

function Option1() {
  return (
    <div className="absolute left-[-1272.41px] size-0 top-[-844px]" data-name="Option">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#1e1e1e] text-[14px] top-0 w-0 whitespace-pre-wrap">✅ Cumple</p>
    </div>
  );
}

function Option2() {
  return (
    <div className="absolute left-[-1272.41px] size-0 top-[-844px]" data-name="Option">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#1e1e1e] text-[14px] top-0 w-0 whitespace-pre-wrap">❌ No cumple</p>
    </div>
  );
}

function Option3() {
  return (
    <div className="absolute left-[-1272.41px] size-0 top-[-844px]" data-name="Option">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#1e1e1e] text-[14px] top-0 w-0 whitespace-pre-wrap">➖ No aplica</p>
    </div>
  );
}

function Calificar3() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center px-[22px] py-[5px] relative rounded-[8px] shrink-0 w-[121px]" data-name="calificar">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Poppins:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#1e1e1e] text-[12px]">calificar</p>
      <VuesaxLinearArrowDown />
      <Option />
      <Option1 />
      <Option2 />
      <Option3 />
    </div>
  );
}

function TableCell24() {
  return (
    <div className="content-stretch flex items-center px-[25px] py-[14px] relative shrink-0 w-[280px]" data-name="TableCell">
      <Calificar3 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon17 />
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_146_1037)" id="Icon">
          <path d={svgPaths.p9b47a00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p15e62a80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_146_1037">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="h-[28px] opacity-50 relative rounded-[8px] shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon18 />
      </div>
    </div>
  );
}

function SstDocumentsList15() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-end relative shrink-0" data-name="SSTDocumentsList">
      <Button11 />
      <Button12 />
    </div>
  );
}

function TableCell25() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[13px] relative shrink-0" data-name="TableCell">
      <SstDocumentsList15 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="TableRow">
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell25 />
    </div>
  );
}

function Checkbox5() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[21px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border border-[#b3b3b3] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function TableCell26() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[13px] py-[18px] relative shrink-0" data-name="TableCell">
      <Checkbox5 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex h-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#0a0a0a] text-[15px] whitespace-pre-wrap">Certificado ARL - Empresa ABC</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#717182] text-[10px] whitespace-pre-wrap">2.5 MB</p>
    </div>
  );
}

function SstDocumentsList16() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="SSTDocumentsList">
      <Paragraph8 />
      <Paragraph9 />
    </div>
  );
}

function TableCell27() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] py-[9px] relative shrink-0 w-[333px]" data-name="TableCell">
      <SstDocumentsList16 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[71.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a0a0a] text-[13px]">2024-01-15</p>
      </div>
    </div>
  );
}

function SstDocumentsList17() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="SSTDocumentsList">
      <Icon19 />
      <Text7 />
    </div>
  );
}

function TableCell28() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[19px] relative shrink-0 w-[150px]" data-name="TableCell">
      <SstDocumentsList17 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38026c00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SstDocumentsList18() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[34px] top-[8px] w-[90.188px]" data-name="SSTDocumentsList">
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">2 comentarios</p>
    </div>
  );
}

function Button13() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[240px]" data-name="Button">
      <Icon20 />
      <SstDocumentsList18 />
    </div>
  );
}

function TableCell29() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[11px] relative shrink-0" data-name="TableCell">
      <Button13 />
    </div>
  );
}

function VuesaxLinearArrowDown3() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="arrow-down">
          <path d={svgPaths.p8bf7900} id="Vector" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearArrowDown2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="vuesax/linear/arrow-down">
      <VuesaxLinearArrowDown3 />
    </div>
  );
}

function Option4() {
  return (
    <div className="absolute left-[-1272.41px] size-0 top-[-844px]" data-name="Option">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#1e1e1e] text-[14px] top-0 w-0 whitespace-pre-wrap">Seleccionar valoración</p>
    </div>
  );
}

function Option5() {
  return (
    <div className="absolute left-[-1272.41px] size-0 top-[-844px]" data-name="Option">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#1e1e1e] text-[14px] top-0 w-0 whitespace-pre-wrap">✅ Cumple</p>
    </div>
  );
}

function Option6() {
  return (
    <div className="absolute left-[-1272.41px] size-0 top-[-844px]" data-name="Option">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#1e1e1e] text-[14px] top-0 w-0 whitespace-pre-wrap">❌ No cumple</p>
    </div>
  );
}

function Option7() {
  return (
    <div className="absolute left-[-1272.41px] size-0 top-[-844px]" data-name="Option">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#1e1e1e] text-[14px] top-0 w-0 whitespace-pre-wrap">➖ No aplica</p>
    </div>
  );
}

function Calificar4() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center px-[22px] py-[5px] relative rounded-[8px] shrink-0 w-[121px]" data-name="calificar">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Poppins:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#1e1e1e] text-[12px]">calificar</p>
      <VuesaxLinearArrowDown2 />
      <Option4 />
      <Option5 />
      <Option6 />
      <Option7 />
    </div>
  );
}

function TableCell30() {
  return (
    <div className="content-stretch flex items-center px-[25px] py-[14px] relative shrink-0 w-[280px]" data-name="TableCell">
      <Calificar4 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon21 />
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_146_1037)" id="Icon">
          <path d={svgPaths.p9b47a00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p15e62a80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_146_1037">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="h-[28px] opacity-50 relative rounded-[8px] shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon22 />
      </div>
    </div>
  );
}

function SstDocumentsList19() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-end relative shrink-0" data-name="SSTDocumentsList">
      <Button14 />
      <Button15 />
    </div>
  );
}

function TableCell31() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[13px] relative shrink-0" data-name="TableCell">
      <SstDocumentsList19 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="TableRow">
      <TableCell26 />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
    </div>
  );
}

function Checkbox6() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[21px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border border-[#b3b3b3] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function TableCell32() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[13px] py-[18px] relative shrink-0" data-name="TableCell">
      <Checkbox6 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex h-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#0a0a0a] text-[15px] whitespace-pre-wrap">Certificado ARL - Empresa ABC</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#717182] text-[10px] whitespace-pre-wrap">2.5 MB</p>
    </div>
  );
}

function SstDocumentsList20() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="SSTDocumentsList">
      <Paragraph10 />
      <Paragraph11 />
    </div>
  );
}

function TableCell33() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] py-[9px] relative shrink-0 w-[333px]" data-name="TableCell">
      <SstDocumentsList20 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[71.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a0a0a] text-[13px]">2024-01-15</p>
      </div>
    </div>
  );
}

function SstDocumentsList21() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="SSTDocumentsList">
      <Icon23 />
      <Text8 />
    </div>
  );
}

function TableCell34() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[19px] relative shrink-0 w-[150px]" data-name="TableCell">
      <SstDocumentsList21 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38026c00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SstDocumentsList22() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[34px] top-[8px] w-[90.188px]" data-name="SSTDocumentsList">
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">2 comentarios</p>
    </div>
  );
}

function Button16() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[240px]" data-name="Button">
      <Icon24 />
      <SstDocumentsList22 />
    </div>
  );
}

function TableCell35() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[11px] relative shrink-0" data-name="TableCell">
      <Button16 />
    </div>
  );
}

function VuesaxLinearArrowDown5() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="arrow-down">
          <path d={svgPaths.p8bf7900} id="Vector" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearArrowDown4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="vuesax/linear/arrow-down">
      <VuesaxLinearArrowDown5 />
    </div>
  );
}

function Option8() {
  return (
    <div className="absolute left-[-1272.41px] size-0 top-[-844px]" data-name="Option">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#1e1e1e] text-[14px] top-0 w-0 whitespace-pre-wrap">Seleccionar valoración</p>
    </div>
  );
}

function Option9() {
  return (
    <div className="absolute left-[-1272.41px] size-0 top-[-844px]" data-name="Option">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#1e1e1e] text-[14px] top-0 w-0 whitespace-pre-wrap">✅ Cumple</p>
    </div>
  );
}

function Option10() {
  return (
    <div className="absolute left-[-1272.41px] size-0 top-[-844px]" data-name="Option">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#1e1e1e] text-[14px] top-0 w-0 whitespace-pre-wrap">❌ No cumple</p>
    </div>
  );
}

function Option11() {
  return (
    <div className="absolute left-[-1272.41px] size-0 top-[-844px]" data-name="Option">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#1e1e1e] text-[14px] top-0 w-0 whitespace-pre-wrap">➖ No aplica</p>
    </div>
  );
}

function Calificar5() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center px-[22px] py-[5px] relative rounded-[8px] shrink-0 w-[121px]" data-name="calificar">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Poppins:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#1e1e1e] text-[12px]">calificar</p>
      <VuesaxLinearArrowDown4 />
      <Option8 />
      <Option9 />
      <Option10 />
      <Option11 />
    </div>
  );
}

function TableCell36() {
  return (
    <div className="content-stretch flex items-center px-[25px] py-[14px] relative shrink-0 w-[280px]" data-name="TableCell">
      <Calificar5 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon25 />
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_146_1037)" id="Icon">
          <path d={svgPaths.p9b47a00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p15e62a80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_146_1037">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="h-[28px] opacity-50 relative rounded-[8px] shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon26 />
      </div>
    </div>
  );
}

function SstDocumentsList23() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-end relative shrink-0" data-name="SSTDocumentsList">
      <Button17 />
      <Button18 />
    </div>
  );
}

function TableCell37() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[13px] relative shrink-0" data-name="TableCell">
      <SstDocumentsList23 />
    </div>
  );
}

function TableRow6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="TableRow">
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
      <TableCell35 />
      <TableCell36 />
      <TableCell37 />
    </div>
  );
}

function Checkbox7() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[21px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border border-[#b3b3b3] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function TableCell38() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[13px] py-[18px] relative shrink-0" data-name="TableCell">
      <Checkbox7 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex h-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#0a0a0a] text-[15px] whitespace-pre-wrap">Certificado ARL - Empresa ABC</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#717182] text-[10px] whitespace-pre-wrap">2.5 MB</p>
    </div>
  );
}

function SstDocumentsList24() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="SSTDocumentsList">
      <Paragraph12 />
      <Paragraph13 />
    </div>
  );
}

function TableCell39() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] py-[9px] relative shrink-0 w-[333px]" data-name="TableCell">
      <SstDocumentsList24 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[71.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a0a0a] text-[13px]">2024-01-15</p>
      </div>
    </div>
  );
}

function SstDocumentsList25() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="SSTDocumentsList">
      <Icon27 />
      <Text9 />
    </div>
  );
}

function TableCell40() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[19px] relative shrink-0 w-[150px]" data-name="TableCell">
      <SstDocumentsList25 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38026c00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SstDocumentsList26() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[34px] top-[8px] w-[90.188px]" data-name="SSTDocumentsList">
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">2 comentarios</p>
    </div>
  );
}

function Button19() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[240px]" data-name="Button">
      <Icon28 />
      <SstDocumentsList26 />
    </div>
  );
}

function TableCell41() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[11px] relative shrink-0" data-name="TableCell">
      <Button19 />
    </div>
  );
}

function VuesaxLinearArrowDown7() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="arrow-down">
          <path d={svgPaths.p8bf7900} id="Vector" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearArrowDown6() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="vuesax/linear/arrow-down">
      <VuesaxLinearArrowDown7 />
    </div>
  );
}

function Option12() {
  return (
    <div className="absolute left-[-1272.41px] size-0 top-[-844px]" data-name="Option">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#1e1e1e] text-[14px] top-0 w-0 whitespace-pre-wrap">Seleccionar valoración</p>
    </div>
  );
}

function Option13() {
  return (
    <div className="absolute left-[-1272.41px] size-0 top-[-844px]" data-name="Option">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#1e1e1e] text-[14px] top-0 w-0 whitespace-pre-wrap">✅ Cumple</p>
    </div>
  );
}

function Option14() {
  return (
    <div className="absolute left-[-1272.41px] size-0 top-[-844px]" data-name="Option">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#1e1e1e] text-[14px] top-0 w-0 whitespace-pre-wrap">❌ No cumple</p>
    </div>
  );
}

function Option15() {
  return (
    <div className="absolute left-[-1272.41px] size-0 top-[-844px]" data-name="Option">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#1e1e1e] text-[14px] top-0 w-0 whitespace-pre-wrap">➖ No aplica</p>
    </div>
  );
}

function Calificar6() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center px-[22px] py-[5px] relative rounded-[8px] shrink-0 w-[121px]" data-name="calificar">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Poppins:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#1e1e1e] text-[12px]">calificar</p>
      <VuesaxLinearArrowDown6 />
      <Option12 />
      <Option13 />
      <Option14 />
      <Option15 />
    </div>
  );
}

function TableCell42() {
  return (
    <div className="content-stretch flex items-center px-[25px] py-[14px] relative shrink-0 w-[280px]" data-name="TableCell">
      <Calificar6 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button20() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon29 />
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_146_1037)" id="Icon">
          <path d={svgPaths.p9b47a00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p15e62a80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_146_1037">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button21() {
  return (
    <div className="h-[28px] opacity-50 relative rounded-[8px] shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon30 />
      </div>
    </div>
  );
}

function SstDocumentsList27() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-end relative shrink-0" data-name="SSTDocumentsList">
      <Button20 />
      <Button21 />
    </div>
  );
}

function TableCell43() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[13px] relative shrink-0" data-name="TableCell">
      <SstDocumentsList27 />
    </div>
  );
}

function TableRow7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="TableRow">
      <TableCell38 />
      <TableCell39 />
      <TableCell40 />
      <TableCell41 />
      <TableCell42 />
      <TableCell43 />
    </div>
  );
}

function Checkbox8() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[21px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border border-[#b3b3b3] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function TableCell44() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[13px] py-[18px] relative shrink-0" data-name="TableCell">
      <Checkbox8 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="content-stretch flex h-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#0a0a0a] text-[15px] whitespace-pre-wrap">Certificado ARL - Empresa ABC</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#717182] text-[10px] whitespace-pre-wrap">2.5 MB</p>
    </div>
  );
}

function SstDocumentsList28() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="SSTDocumentsList">
      <Paragraph14 />
      <Paragraph15 />
    </div>
  );
}

function TableCell45() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] py-[9px] relative shrink-0 w-[333px]" data-name="TableCell">
      <SstDocumentsList28 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[71.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a0a0a] text-[13px]">2024-01-15</p>
      </div>
    </div>
  );
}

function SstDocumentsList29() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="SSTDocumentsList">
      <Icon31 />
      <Text10 />
    </div>
  );
}

function TableCell46() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[19px] relative shrink-0 w-[150px]" data-name="TableCell">
      <SstDocumentsList29 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38026c00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SstDocumentsList30() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[34px] top-[8px] w-[90.188px]" data-name="SSTDocumentsList">
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">2 comentarios</p>
    </div>
  );
}

function Button22() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[240px]" data-name="Button">
      <Icon32 />
      <SstDocumentsList30 />
    </div>
  );
}

function TableCell47() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[11px] relative shrink-0" data-name="TableCell">
      <Button22 />
    </div>
  );
}

function VuesaxLinearArrowDown9() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/arrow-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="arrow-down">
          <path d={svgPaths.p8bf7900} id="Vector" stroke="var(--stroke-0, #1E1E1E)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearArrowDown8() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="vuesax/linear/arrow-down">
      <VuesaxLinearArrowDown9 />
    </div>
  );
}

function Option16() {
  return (
    <div className="absolute left-[-1272.41px] size-0 top-[-844px]" data-name="Option">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#1e1e1e] text-[14px] top-0 w-0 whitespace-pre-wrap">Seleccionar valoración</p>
    </div>
  );
}

function Option17() {
  return (
    <div className="absolute left-[-1272.41px] size-0 top-[-844px]" data-name="Option">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#1e1e1e] text-[14px] top-0 w-0 whitespace-pre-wrap">✅ Cumple</p>
    </div>
  );
}

function Option18() {
  return (
    <div className="absolute left-[-1272.41px] size-0 top-[-844px]" data-name="Option">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#1e1e1e] text-[14px] top-0 w-0 whitespace-pre-wrap">❌ No cumple</p>
    </div>
  );
}

function Option19() {
  return (
    <div className="absolute left-[-1272.41px] size-0 top-[-844px]" data-name="Option">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[normal] left-0 not-italic text-[#1e1e1e] text-[14px] top-0 w-0 whitespace-pre-wrap">➖ No aplica</p>
    </div>
  );
}

function Calificar7() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center px-[22px] py-[5px] relative rounded-[8px] shrink-0 w-[121px]" data-name="calificar">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Poppins:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#1e1e1e] text-[12px]">calificar</p>
      <VuesaxLinearArrowDown8 />
      <Option16 />
      <Option17 />
      <Option18 />
      <Option19 />
    </div>
  );
}

function TableCell48() {
  return (
    <div className="content-stretch flex items-center px-[25px] py-[14px] relative shrink-0 w-[280px]" data-name="TableCell">
      <Calificar7 />
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button23() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon33 />
      </div>
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_146_1037)" id="Icon">
          <path d={svgPaths.p9b47a00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p15e62a80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_146_1037">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button24() {
  return (
    <div className="h-[28px] opacity-50 relative rounded-[8px] shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon34 />
      </div>
    </div>
  );
}

function SstDocumentsList31() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-end relative shrink-0" data-name="SSTDocumentsList">
      <Button23 />
      <Button24 />
    </div>
  );
}

function TableCell49() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[13px] relative shrink-0" data-name="TableCell">
      <SstDocumentsList31 />
    </div>
  );
}

function TableRow8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="TableRow">
      <TableCell44 />
      <TableCell45 />
      <TableCell46 />
      <TableCell47 />
      <TableCell48 />
      <TableCell49 />
    </div>
  );
}

function Checkbox9() {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 size-[21px]" data-name="checkbox">
      <div aria-hidden="true" className="absolute border border-[#b3b3b3] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function TableCell50() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[13px] py-[18px] relative shrink-0" data-name="TableCell">
      <Checkbox9 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="content-stretch flex h-[20px] items-start overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[22px] min-h-px min-w-px not-italic relative text-[#0a0a0a] text-[15px] whitespace-pre-wrap">Certificado ARL - Empresa ABC</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#717182] text-[10px] whitespace-pre-wrap">2.5 MB</p>
    </div>
  );
}

function SstDocumentsList32() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="SSTDocumentsList">
      <Paragraph16 />
      <Paragraph17 />
    </div>
  );
}

function TableCell51() {
  return (
    <div className="content-stretch flex flex-col items-start px-[8px] py-[9px] relative shrink-0 w-[333px]" data-name="TableCell">
      <SstDocumentsList32 />
    </div>
  );
}

function Icon35() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[71.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0a0a0a] text-[13px]">2024-01-15</p>
      </div>
    </div>
  );
}

function SstDocumentsList33() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="SSTDocumentsList">
      <Icon35 />
      <Text11 />
    </div>
  );
}

function TableCell52() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[19px] relative shrink-0 w-[150px]" data-name="TableCell">
      <SstDocumentsList33 />
    </div>
  );
}

function Icon36() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p38026c00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SstDocumentsList34() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[34px] top-[8px] w-[90.188px]" data-name="SSTDocumentsList">
      <p className="font-['Poppins:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px]">2 comentarios</p>
    </div>
  );
}

function Button25() {
  return (
    <div className="h-[36px] relative rounded-[8px] shrink-0 w-[240px]" data-name="Button">
      <Icon36 />
      <SstDocumentsList34 />
    </div>
  );
}

function TableCell53() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[11px] relative shrink-0" data-name="TableCell">
      <Button25 />
    </div>
  );
}

function VuesaxLinearClipboardImport3() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/clipboard-import">
      <div className="absolute inset-[-0.25%_0_0_-4.41%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.75 17.0417">
          <g id="clipboard-import">
            <path d={svgPaths.p3d0b9c80} id="Vector" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
            <path d={svgPaths.p4f6c580} id="Vector_2" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
            <path d={svgPaths.p8a8d6c0} id="Vector_3" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
            <path d={svgPaths.p1eaaaa80} id="Vector_4" stroke="var(--stroke-0, #848484)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
            <g id="Vector_5" opacity="0" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function VuesaxLinearClipboardImport2() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="vuesax/linear/clipboard-import">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <VuesaxLinearClipboardImport3 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-start relative">
        <VuesaxLinearClipboardImport2 />
        <p className="font-['Poppins:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#848484] text-[12px]">No aplica</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#e0e0e0] h-[32px] relative rounded-[8px] shrink-0 w-[152px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pl-[8px] relative size-full">
        <Text12 />
      </div>
    </div>
  );
}

function Calificar8() {
  return (
    <div className="content-stretch flex h-[32px] items-center relative shrink-0" data-name="calificar">
      <Container5 />
    </div>
  );
}

function TableCell54() {
  return (
    <div className="content-stretch flex items-center px-[25px] py-[14px] relative shrink-0 w-[280px]" data-name="TableCell">
      <Calificar8 />
    </div>
  );
}

function Icon37() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333L14 2" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p25f66900} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button26() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon37 />
      </div>
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_146_1037)" id="Icon">
          <path d={svgPaths.p9b47a00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p15e62a80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_146_1037">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button27() {
  return (
    <div className="h-[28px] opacity-50 relative rounded-[8px] shrink-0 w-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon38 />
      </div>
    </div>
  );
}

function SstDocumentsList35() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-end relative shrink-0" data-name="SSTDocumentsList">
      <Button26 />
      <Button27 />
    </div>
  );
}

function TableCell55() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[13px] relative shrink-0" data-name="TableCell">
      <SstDocumentsList35 />
    </div>
  );
}

function TableRow9() {
  return (
    <div className="bg-[#e0e0e0] content-stretch flex items-center justify-center relative shrink-0" data-name="TableRow">
      <TableCell50 />
      <TableCell51 />
      <TableCell52 />
      <TableCell53 />
      <TableCell54 />
      <TableCell55 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="TableBody">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
      <TableRow6 />
      <TableRow7 />
      <TableRow8 />
      <TableRow9 />
    </div>
  );
}

function Table() {
  return (
    <div className="relative shrink-0" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit]">
        <TableHeader />
        <TableBody />
      </div>
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="relative shrink-0 w-[1222px]" data-name="Primitive.div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-x-auto overflow-y-clip relative w-full">
        <Table />
      </div>
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[30px] items-start pb-px pl-[25px] pr-px pt-[25px] relative rounded-[14px] size-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <CardTitle />
      <Filtros />
      <PrimitiveDiv />
    </div>
  );
}