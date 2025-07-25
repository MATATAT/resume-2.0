import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import type { CategoricalValue, Resume } from '../../../dto/resume';

const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontFamily: 'Helvetica',
    },
    section: {
        marginBottom: 20,
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
        orphans: 3,
        widows: 3,
        minHeight: 50,
        backgroundColor: 'transparent',
    },
    jobHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    company: {
        fontSize: 12,
        fontWeight: 'normal',
    },
    position: {
        fontSize: 12,
        fontWeight: 'bold',
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
    },
    qualificationTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    qualificationList: {
        flexDirection: 'column',
        gap: 3,
    },
    qualificationItem: {
        fontSize: 10,
        backgroundColor: '#f0f0f0',
        padding: '2 5',
        borderRadius: 3,
    },
    categorizedSkill: {
        marginBottom: 8,
    },
    categoryHeader: {
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 3,
        marginRight: 8,
    },
    categoryHeaderInline: {
        fontSize: 10,
        fontWeight: 'bold',
        marginRight: 8,
        alignSelf: 'center',
    },
    languageSkillRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginBottom: 5,
        gap: 5,
    },
    likesRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
        marginBottom: 5,
    },
    categoryItems: {
        fontSize: 10,
        marginLeft: 10,
        marginBottom: 2,
    },
});

interface ResumePDFProps {
    data: Resume;
}

// Helper function to render skills based on type
const renderSkillItem = (skill: string | CategoricalValue, qualificationId: string) => {
    if (typeof skill === 'string') {
        return <Text style={styles.qualificationItem}>{skill}</Text>;
    }

    // Handle categorized skills - special handling for languages
    if (qualificationId === 'languages') {
        return (
            <View style={styles.languageSkillRow}>
                <Text style={styles.categoryHeaderInline}>{skill.category.toUpperCase()}:</Text>
                {skill.values
                    .join(', ')
                    .split(', ')
                    .map((item, index) => (
                        <Text key={index} style={styles.qualificationItem}>
                            {item.trim()}
                        </Text>
                    ))}
            </View>
        );
    }

    // Handle other categorized skills (tools, etc.)
    if (qualificationId === 'tools') {
        return (
            <View style={styles.languageSkillRow}>
                <Text style={styles.categoryHeaderInline}>{skill.category.toUpperCase()}:</Text>
                {skill.values
                    .join(', ')
                    .split(', ')
                    .map((item, index) => (
                        <Text key={index} style={styles.qualificationItem}>
                            {item.trim()}
                        </Text>
                    ))}
            </View>
        );
    }

    // Handle likes - display in horizontal row with bubbles
    if (qualificationId === 'likes') {
        if (typeof skill === 'string') {
            return <Text style={styles.qualificationItem}>{skill}</Text>;
        }
        return skill.values.map((item, index) => (
            <Text key={index} style={styles.qualificationItem}>
                {item.trim()}
            </Text>
        ));
    }

    // Handle other categorized skills
    return (
        <View style={styles.categorizedSkill}>
            <Text style={styles.categoryHeader}>{skill.category.toUpperCase()}:</Text>
            <Text style={styles.categoryItems}>{skill.values.join(', ')}</Text>
        </View>
    );
};

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
                                <Text style={styles.position}>{exp.position}</Text>
                                <Text style={styles.company}>{exp.name}</Text>
                            </View>
                            <Text style={styles.dates}>
                                {exp.startDate} - {exp.endDate || 'Current'} / {exp.location}
                            </Text>
                        </View>
                        {exp.notes.map((note, noteIndex) => (
                            <View key={noteIndex} style={styles.bulletPointContainer}>
                                <Text style={styles.bullet}>•</Text>
                                <Text style={styles.bulletText}>
                                    {typeof note === 'string' ? note : note.values.join(', ')}
                                </Text>
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
                        <View style={qual.id === 'likes' ? styles.likesRow : styles.qualificationList}>
                            {qual.children.map((skill, skillIndex) => (
                                <View key={skillIndex}>{renderSkillItem(skill, qual.id)}</View>
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
                            <Text style={styles.bulletText}>{data.education.location}</Text>
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
