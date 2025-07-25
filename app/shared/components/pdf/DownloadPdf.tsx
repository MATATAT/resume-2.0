import { IconButton, Spinner, type IconButtonProps } from '@chakra-ui/react';
import { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import { Toaster, toaster } from '~/chakra-components/ui/toaster';
import { useResume } from '~/context/ResumeContext';
import { generatePDF } from './generate';

export const DownloadPdf = (props: IconButtonProps) => {
    const resumeData = useResume();
    const { name } = resumeData;
    const [isGenerating, setIsGenerating] = useState(false);

    const handleDownload = async () => {
        let loadingId: string | undefined;
        try {
            setIsGenerating(true);
            loadingId = toaster.create({
                type: 'loading',
                title: 'Generating PDF',
                description: 'Please wait while resume is being generated...',
                duration: Infinity,
            });

            const blob = await generatePDF(resumeData);

            const url = window.URL.createObjectURL(blob);

            // Create and trigger download
            const link = document.createElement('a');
            link.href = url;
            link.download = `${name.toLowerCase().replace(/\s+/g, '-')}-resume.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Cleanup
            window.URL.revokeObjectURL(url);

            if (loadingId !== undefined) {
                toaster.dismiss(loadingId);
            }

            toaster.create({
                type: 'success',
                title: 'PDF Generated',
                description: 'Resume has been downloaded successfully.',
                duration: 3000,
            });
        } catch (error) {
            console.error('Error generating PDF:', error);
            if (loadingId !== undefined) toaster.dismiss(loadingId);
            toaster.create({
                type: 'error',
                title: 'Error',
                description: 'Failed to generate PDF. Please try again.',
                duration: 5000,
            });
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <>
            <IconButton
                variant={'surface'}
                aria-label='Download resume'
                onClick={handleDownload}
                disabled={isGenerating}
                data-print-hide
                {...props}
            >
                {isGenerating ? <Spinner size='sm' /> : <FiDownload />}
            </IconButton>
            <Toaster />
        </>
    );
};
