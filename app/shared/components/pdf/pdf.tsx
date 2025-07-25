import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import type { Resume } from '../../../dto/resume';

const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontFamily: 'Helvetica',
    },
    section: {
        marginBottom: 20,
        breakInside: 'avoid',
    },
    header: {
        marginBottom: 20,
        alignItems: 'center',
    },
    name: {
        fontSize: 24,
        marginBottom: 5,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    title: {
        fontSize: 16,
        marginBottom: 15,
        color: '#666',
        textAlign: 'center',
    },
    contactContainer: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    contact: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: 10,
        marginBottom: 5,
        gap: 12,
    },
    websiteContact: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: 9,
        marginBottom: 5,
        gap: 12,
        color: '#888',
    },
    websiteDot: {
        color: '#bbb',
    },
    sectionHeading: {
        fontSize: 14,
        marginBottom: 10,
        fontWeight: 'bold',
        borderBottom: '1px solid #333',
        paddingBottom: 3,
    },
    experienceItem: {
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15,
        breakInside: 'avoid',
    },
    jobHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    company: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    position: {
        fontSize: 12,
        fontStyle: 'italic',
    },
    dates: {
        fontSize: 10,
        color: '#666',
    },
    bulletPointContainer: {
        flexDirection: 'row',
        marginBottom: 3,
        paddingLeft: 25,
    },
    bullet: {
        fontSize: 10,
        marginRight: 15,
    },
    bulletText: {
        fontSize: 10,
        flex: 1,
    },
    qualificationSection: {
        marginBottom: 10,
        breakInside: 'avoid',
    },
    qualificationTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    qualificationList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
    },
    qualificationItem: {
        fontSize: 10,
        backgroundColor: '#f0f0f0',
        padding: '2 5',
        borderRadius: 3,
    },
});

interface ResumePDFProps {
    data: Resume;
}

export const ResumePDF = ({ data }: ResumePDFProps) => (
    <Document>
        <Page size='A4' style={styles.page}>
            {/* Header Section */}
            <View style={styles.header}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.title}>{data.title}</Text>
                <View style={styles.contactContainer}>
                    <View style={styles.contact}>
                        <Text>{data.contact.location}</Text>
                        <Text>•</Text>
                        <Text>{data.contact.email}</Text>
                        <Text>•</Text>
                        <Text>{data.contact.phone}</Text>
                    </View>
                    <View style={styles.websiteContact}>
                        <Text>{data.contact.websites.personal}</Text>
                        <Text style={styles.websiteDot}>•</Text>
                        <Text>{data.contact.websites.linkedIn}</Text>
                        <Text style={styles.websiteDot}>•</Text>
                        <Text>{data.contact.websites.gitHub}</Text>
                    </View>
                </View>
            </View>

            {/* Experience Section */}
            <View style={styles.section}>
                <Text style={styles.sectionHeading}>Professional Experience</Text>
                {data.experience.map((exp, index) => (
                    <View key={index} style={styles.experienceItem}>
                        <View style={styles.jobHeader}>
                            <View>
                                <Text style={styles.company}>{exp.name}</Text>
                                <Text style={styles.position}>{exp.position}</Text>
                            </View>
                            <Text style={styles.dates}>
                                {exp.startDate} - {exp.endDate || 'Present'}
                            </Text>
                        </View>
                        {exp.notes.map((note, noteIndex) => (
                            <View key={noteIndex} style={styles.bulletPointContainer}>
                                <Text style={styles.bullet}>•</Text>
                                <Text style={styles.bulletText}>{note}</Text>
                            </View>
                        ))}
                    </View>
                ))}
            </View>

            {/* Qualifications Section */}
            <View style={styles.section}>
                <Text style={styles.sectionHeading}>Skills</Text>
                {data.qualifications.map((qual, index) => (
                    <View key={index} style={styles.qualificationSection}>
                        <Text style={styles.qualificationTitle}>{qual.title}</Text>
                        <View style={styles.qualificationList}>
                            {qual.children.map((skill, skillIndex) => (
                                <Text key={skillIndex} style={styles.qualificationItem}>
                                    {skill}
                                </Text>
                            ))}
                        </View>
                    </View>
                ))}
            </View>

            {/* Education Section */}
            <View style={styles.section}>
                <Text style={styles.sectionHeading}>Education</Text>
                <View style={styles.experienceItem}>
                    <View style={styles.jobHeader}>
                        <View>
                            <Text style={styles.company}>{data.education.name}</Text>
                            <Text style={styles.position}>{data.education.position}</Text>
                        </View>
                        <Text style={styles.dates}>
                            {data.education.startDate} - {data.education.endDate}
                        </Text>
                    </View>
                </View>
            </View>
        </Page>
    </Document>
);
