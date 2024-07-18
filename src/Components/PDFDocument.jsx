import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const PDFDocument = ({ data, objectives, closing }) => (
    <Document>
        {data?.JuryMembers?.map((member, key) => (
            <Page key={key} style={styles.page}>
                <View style={styles.sectionBorder}>
                    <View style={styles.section1}>
                        <Text style={styles.textLeft}>Mr {member.FirstName} {member.LastName}</Text>
                        <Text style={styles.textLeft}>{member.Role.RoleName} du Jury d'examens</Text>
                        <Text style={styles.textLeft}>{data.School[0].Name}</Text>
                        <Text style={styles.textLeft}>Secteur : {data.Sectors[0].Name}</Text>
                        <Text style={styles.textLeft}>{data.Meetings[0].Location}</Text>
                    </View>
                    <View style={[styles.section, styles.textCenter]}>
                        <Text>A</Text>
                        <Text>Monsieur Le Délégué Régional de la Formation Professionnelle</Text>
                        <Text style={styles.textLarge}>{data.School[0].ville}</Text>
                    </View>
                    <View style={styles.section}>
                        <View style={[styles.inlineText, styles.marginTop, styles.font]}>
                            <Text style={[styles.bold, styles.textLeft]}>Objet :</Text>
                            <Text style={styles.textLeft}>Convocation à assister à la {data.Meetings[0].Type} réunion du Jury d'examens.</Text>
                        </View>
                        <Text style={[styles.textLeft, styles.marginVertical]}>
                            Le président du Jury d'examens de {data.School[0].Name} Monsieur {member.FirstName} {member.LastName} vous informe de la programmation de la {data.Meetings[0].Type} réunion du Jury d'examens de {data.School[0].Name}, {data.Meetings[0].Date}. La réunion aura lieu à {data.Meetings[0].Location}.
                        </Text>
                        <View style={styles.list}>
                            {objectives?.map((objective, index) => (
                                <Text key={index} style={styles.listItem}>{`•  ${objective}`}</Text>
                            ))}
                        </View>
                        <View style={styles.inlineText}>
                            <Text style={[styles.textLeft, styles.closing]}>{closing}</Text>
                        </View>
                    </View>
                    <View style={[styles.section, styles.textRight]}>
                        <Text>Fait à {data.School[0].ville}</Text>
                        <Text>le {data.Meetings[0].Date}</Text>
                    </View>
                </View>
            </Page>
        ))}
    </Document>
);

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        padding: 20,
        paddingRight: 45,
        paddingLeft: 45,
        marginTop: 10,
    },
    section: {
        marginBottom: 20,
        lineHeight: 1.3,
    },
    section1: {
        marginBottom: 20,
        lineHeight: 1.5,
    },
    marginTop: {
        marginBottom: 18,
        fontWeight: 'bold',
    },
    bold: {
        fontWeight: "bold",
    },
    textLeft: {
        textAlign: 'left',
        fontSize: 10,
    },
    textCenter: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 10,
        marginTop: 15,
    },
    textRight: {
        textAlign: 'right',
        fontWeight: 'normal',
        fontSize: 10,
    },
    textLarge: {
        fontWeight: 'normal',
        fontSize: 10,
    },
    list: {
        fontWeight: 'normal',
        fontSize: 13,
    },
    listItem: {
        marginBottom: 3,
        fontWeight: 'normal',
        fontSize: 10,
        lineHeight: 1.5,
        marginLeft: 10
    },
    inlineText: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginTop: 15,
    },
    paddingVertical: {
        paddingVertical: 4,
    },
    marginVertical: {
        marginVertical: 1,
        lineHeight: 2,
    },
});

export default PDFDocument;
