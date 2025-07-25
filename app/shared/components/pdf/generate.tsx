import ReactPDF from '@react-pdf/renderer';
import type { Resume } from '~/dto/resume';
import { ResumePDF } from './pdf';

export async function generatePDF(data: Resume) {
    return await ReactPDF.pdf(<ResumePDF data={data} />).toBlob();
}
