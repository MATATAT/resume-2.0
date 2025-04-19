import { createContext, useContext } from 'react';
import type { Resume } from '~/dto/Resume';

const ResumeContext = createContext<Resume | undefined>(undefined);

export function useResume() {
    const context = useContext(ResumeContext);
    if (!context) {
        throw new Error('useResume must be used within a ResumeProvider');
    }
    return context;
}

export function ResumeProvider({ children, value }: { children: React.ReactNode; value: Resume }) {
    return <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>;
}
