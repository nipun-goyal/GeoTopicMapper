const topics = {
  "B18%2D21 %2D Supplemental ESA %2D Appendix 8 %2D Facilities Environmental Protection Plan %2DA3L5C6": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B3%2D33 %2D Vol 8B %2D Marine Transportation ESA (Part 8 of 11) %2D A1T0I3 ": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "B3%2D23 %2D Appendix 06 %2D ESA Appendix 12 %2D Decommissioning Environmental Technical Report Part 14 of 14 %2D A4E7F3": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A87033%2D31 ESA_App_E_Fish_Tech_Part2_of_2 %2D A5V8G1": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B5%2D20 %2D V5A_ESA_12of16_BIOPHYSICAL %2D A3S1Q9": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D3%2Dbb %2D %2D A0T2I5 %2D ESA%2DEA Viewshed Modelling Tech%2DVMA 1 Rept": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "A74788%2D21 V2 %2D ESA_Amendment_Appendix_L%2DS %2D A4W8E7": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D4%2Do %2D %2D A0T2L1 %2D ESA%2DEA Geotechnical Rpts Appendix A Maps ERM TERRAIN 1%2D20k 09 ": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A3E0S5 %2D Line 2 Replacement ESA %2D 17 of 21": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B%2D7%2Dd %2D %2D A0T3I3 %2D ESA%2DEA Heritage Resources Rpt Appendix A %2D Env Res Map 1%2D20k 03": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A81200%2D1 EAS0005250 Dephi Pesh Petitot Pipeline CSA Phase I Report_ Final %2D A5H9Q6": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D9%2Do %2D %2D A0T3T7 %2D ESA%2DEA Tech Rpts Wildlife and Wildlife Habitat Appendix A Env Res Maps 1%2D20k 08": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A72401%2D18 V4 06 ESA Appendix B%2DEAS Sheets 23%2D27%2DPart 5 of 6 %2D A4T0Z8": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1U2X8 %2D Cutbank River Lateral Loop (Bald Mountain) ESA_rev1_part_12_of_13": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "Attachment 12h %2D ESA Appendix_C_Part_3of3 %2D A4F8K2": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A1W6W9 %2D ESA 2 of 3": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A99863%2D4 Attachment NEB 1.1%2D1 Groundbirch ESA Part 3 of 3 %2D Appendices 4%2D7 %2D A6V0Z4": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D2a %2D Front Matter %2D A0X2I0 ": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A63951%2D2 V4 %2D ESA_Appendix A_EPP_Pipeline %2D A4D9H7": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "B%2D01W %2D Volume 4 %2D Environmental Assessment Report %2D Consultation Program A0W9J1": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D6%2Du %2D %2D A0T3H2 %2D ESA%2DEA Tech Reports %2D Vegetation Env Res Maps 1%2D20k 18": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A90753%2D5 Alderson Lateral Phase 1 ESA %2D Final %2D A6C4V6": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A90753%2D21 Rod Lake Receipt and Sales MS Phase 1 ESA %2D Final %2D A6C4X2": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B2%2D16 %2D Volume II %2D ESA %2D Appendix 2 %2D Environmental Alignment Sheet Package %2D Map 56 to 65  %2D Pt 7 of 8 %2D A3E2Z1": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D1j  %2D Groundbirch ESA_NEB_7of14 (A1J6I9)": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A2Q2X9 %2D Appendix 6 %2D ESA %2D Appendix E thru F": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A3E0R6 %2D Line 2 Replacement ESA %2D 8 of 21": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A0X4E6 %2D Environmental Assessment": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A1Z9F3 %2D Cheecham %2D Kettle River Area Expansion %2D Sec 58 ESA Section 7 to 10 June 2011": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "B35%2D18 %2D ESA_Update_September_30th_Wildlife_Section_9(c) %2D A2D7R5 ": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D4C %2D Appendix 1%2D1 %2D ESA Update and Errata A1A2L1": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B13%2D1 %2D Wolverine River Lateral Loop (Carmon Creek Section) Environmental and Socio%2Deconomic Assessment %2D A4C2A8": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A0K4T9 %2D Stage 2 Archaeological Assessment": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A90515%2D20 Steel Reef ESA%2DPart 2 %2D A6C0K4": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A1W6Y0 %2D ESA Appendix 5 (2 of 2)": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B5%2D18 %2D Appendix 06 %2D ESA Appendix 2 %2D Environmental Alignment Sheet Package Part 04 of 18 %2D A4E6X8": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D3%2Dn %2D %2D A0T2H1 %2D ESA%2DEA Fish Atlas Proposed 2 of 4": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A0Q8Z8 %2D Environmental and Socio%2DEconomic Assessment": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A88335%2D6 Appendix IR1A %2D Petrolia Phase I ESA %2D Part 5 of 5 %2D A5X8D0": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B3%2D13 %2D Vol 6B %2D Marine Terminal ESA (Part 2 of 4) %2D A1T0G3 ": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "A87033%2D27 ESA_App_C_Acoustic %2D A5V8F7": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "Attachment %2D ESA %2D 8 of 11 %2D A3V4G4": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B%2D3%2Ds %2D %2D A0T2H6 %2D ESA%2DEA Fish and Fish Habitat Appendix Env Res Maps ERM WETLAND FISH%2DHABITAT 1%2D20k 16to24": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1G0I0 %2D ESA Appendix F (Environmental Alignment Sheets)": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A1K3I3 %2D Appendix E %2D Hardisty West EMI ESA": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A0J6D0 %2D Environmental Assessment": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A81160%2D37 7178_eiccf4_am_035_mndetails_151111a %2D A5H8Q5": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A76417%2D4 Appendix 6.1 %2D ESA Update %2D A4Z3Z4": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A98641%2D12 NCE_ESA_Section5 %2D A6T2V7": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A1J4Z9 %2D ESA Appendix D %2D AIA 4 of 8": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "A1Z5T5 %2D Appendix 3 %2D ESA Figures and Appendices": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B2%2D2  %2D ESA Section 1%2D4 Part 1 %2D A1X1U6": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A1A0F4 %2D Appendix 5 Figure 4.3%2D2": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A1U2W8 %2D Cutbank River Lateral Loop (Bald Mountain) ESA_rev1_part_2_of_13": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B18%2D29 %2D Supplemental ESA %2D Appendix 9g %2D Environmental Alignment Sheet Package %2D A3L5D4": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B8%2D18 %2D North_Montney_ESA_Sec 6 REVISED %2D A3V1U5": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "Appendix B %2D ESA for Minton Pump Station Addition %2D A4R3L1": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D6%2Dc %2D %2D A0T3F4 %2D ESA%2DEA Tech Reports %2D Vegetation Env Res Maps 1%2D20k 00 Legend": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D02%2D8 %2D NGTL Horn River Project %2D ESA Inspection %2D A1R8D5 ": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A1Y7Z3 %2D ESA Report Appendix H Overall Project Schedule": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "A3J0I9 %2D ESA %2D Main Section with EPP and Interaction Table": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A72401%2D26 V4 14 ESA Appendix E%2DPart 4 of 4 %2D A4T1A6": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D11v  %2D Alignment Sheet %2D Manitoba 03 (A0Y0T2)": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D5d %2D Updates to ESA %2D A1D6T9": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1A0F1 %2D Appendix 5 Figure 4.2%2D4": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A81915%2D1 Letter to NEB re Supplemental Environmental and Socio%2DEconomic Assessment %2D 3 %2D A5J1Q1": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "Section_5%2DESA%2DAppA%2DEPP%2D2of3 %2D A4U3W5": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "A2K2F1 %2D Appendix 2 %2D ESA Appendix B Part 2 of 3": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A3H4X8 %2D Attachment 8A %2D ESA %2D Appendix G Part 6 of 7": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B2%2D18 %2D ESA Section 7 Cumulative Effects Assessment %2D A1X1W2": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B2%2D25_ESA_Appendix_2_Alignment_Sheets_Part1of5 %2D A4K2T0": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "B%2D11m %2D Alignment Sheet %2D Alberta 27 (A0Y0S3 )": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D1AA  %2D ESA %2D NWML_KomieExt_06_of_17  %2D A2F4L4": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "A81457%2D3 Marsden Salt Water Pipeline Abandonment %2D Phase I ESA Report (SK)  %2D A5I3U7": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D3n %2D Alignment Sheet %2D Alberta 14  %2D A0X2S1 ": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A3H4W4 %2D Attachment 8A %2D ESA %2D Appendix D Part 3 of 10": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D5%2Dq %2D %2D A0T3D8 %2D ESA%2DEA Tech Rpts Soils Appendix G Env Res Maps  SOILS 1%2D20k 012": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B2%2D01 Cover Letter %2D King s North Connection Pipeline Project %2D ESA Pages %2D A4A2W4": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A3E0S7 %2D Line 2 Replacement ESA %2D 19 of 21": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B2%2D9 %2D Volume II %2D ESA %2D Appendix 1B %2D Facilities Environmental Protection Plan %2D A3E2Y4": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A74508%2D3 Appendix 6.1 %2D ESA Part 1b of 10 %2D A4W2R4": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D1%2Dz %2D ESA %2D Noise Assessment supporting data %2D Volume II %2D Appendix IV to ESA %2D ACCE Application %2D A0X6A2  ": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "A73674%2D21 Section_5%2DESA%2DAppB%2DSoil%2D5of7 %2D A4V0R2": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "B%2D2CC Volume III %2D ESA %2D Align Sheets (Part 12) (A0Z1C4)": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "Supplemental Environmental and Socio%2Deconomic Assessment %2D February 2014 (Part 1 of 2) %2D A3V0F7": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "B2%2D17 %2D Vantage Pipeline Project Vol II ESA Section 15(a) %2D A1X5Y2": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A2K2F3 %2D Appendix 2 %2D ESA Appendices C, D, E": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D14j %2D Supplemental ESA 7 of 17 A1G4Q2": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D3z %2D Alignment Sheet %2D Alberta 26  %2D A0X2T3": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B2%2D20 %2D Volume IIA %2D ESA %2D Appendix 5A %2D Edmonton Terminal Environmental Noise Impact Assessment %2D A3E2Z5": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "B%2D2aa %2D KXL ESA %2D Section 13 Part 3 of 3 %2D A1I9W6 ": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "A87481%2D3 Enchant Phase 1 ESA Final %2D A5W5C5": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A0R3X4 %2D Seacor Report_SEACOR App F Phase I ESA %2D Port Kells Site Location Plan": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "B%2D4r %2D Alignment Sheet %2D Manitoba 18  %2D A0X2Q5": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A1A3G6 %2D Environment Canada Section 6 Response": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1U5I6 %2D 2010%2D09%2D14 %2D REFILING of ESA Part 4 of 13 for the Cutbank River Lateral Loop": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D1%2Du %2D photos %2D Volume II %2D ESA %2D Photos %2D Plates 1 %2D 6 %2DA0X5Z7   ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D8%2Da %2D %2D A0T3L1 %2D ESA%2DEA Wetlands Report Part 1": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D5%2Dh %2D %2D A0T3C9 %2D ESA%2DEA Tech Rpts Soils Appendix G Env Res Maps ERM SOILS 1%2D20k 03": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B6%2D10 %2D Appendix 06 %2D ESA Appendix 6 %2D Environmental Noise Impact Assessment Part 1 of 3 %2D A4E7A3": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "B%2D14e %2D Supplemental ESA 2 of 17 A1G4L7": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A2Y1Y0 %2D Appendix 3%2D1 %2D PRML Decommissioning ESA August2012 4of5": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B3%2D28_ESA_Appendix_2_Alignment_Sheets_Part4of5 %2D A4K2T4": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "B%2D5%2Dt %2D %2D A0T3E1 %2D ESA%2DEA Tech Rpts Soils Appendix G Env Res Maps SOILS 1%2D20k 015": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1X9F8 %2D ESA Appendix 7": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B1%2D21 %2D 12_1313340047_TCPL_CCP_ESA_FINAL_AppD_Part2 %2D A3V4L9": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A3F6W6 %2D Line 3 Replacement Project ESA %2D Part 9 of 16": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A0W9R2 %2D Environmental Assessment": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A87481%2D7 Hotchkiss Phase 1 ESA Final %2D A5W5C9": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "05_ESA_FINAL_Appendix02_pt2of3 %2D A4C2U3": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D14g %2D Supplemental ESA 4 of 17 A1G4L9": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B2%2D16 %2D Vantage Pipeline Project Vol II ESA Section 14 %2D A1X5Y1": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "B%2D4%2Dd %2D %2D A0T2K0 %2D ESA%2DEA Geotechnical Rpts Appendix A %2D Map ERM TERRAIN 1%2D20k 00 Legend 2": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1A0H1 %2D Appendix 5 Figure 4.6%2D2": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A90753%2D19 Mega River and 2 Receipt MS Phase 1 ESA %2D Final %2D A6C4X0": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A84444%2D6 Section 5 %2D ESA %2D Interactions Table %2D A5R4S3": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "Appendix 5 %2D ESA and EPP %2D A3T1K2": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "Appendix 5 %2D ESA %2D Main and Appendices 1 and 2 %2D A3R5E4": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D2f  Vol II %2D ESA %2D Section 5 (Part 2) %2D ESE Setting A0Y1U2": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A81755%2D7 Appendix 3 %2D ESA Interactions Table %2D A5I8I5": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B2%2D34 %2D Volume IIA %2D ESA %2D Appendix 11 %2D Heritage Resources Act Clearance %2D A3E3A9 (1)": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D01JJ %2D Volume 4 %2D Environmental Assessment Report %2D Appendix E2 A0W9K4": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "A1W4K7 %2D ESA Appendix E SLP Wildlife": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D7%2Dw %2D %2D A0T3K2 %2D ESA%2DEA Heritage Resources Rpt Appendix A %2D Env Res Map 1%2D20k 22": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D3%2Dc %2D %2D A0T2G0 %2D ESA%2DEA Env Site Assessments Report 3": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A2I0L2 %2D ESA Appendix 5 Vegetation Report": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A0X4F5 %2D Environmental Assessment": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A3L3D3 %2D Appendix 5 %2D ESA %2D Main": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A73674%2D23 Section_5%2DESA%2DAppB%2DSoil%2D7of7 %2D A4V0R4": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A96233%2D7 Attachment NEB 3.1%2D3 McLeod_ESA_Part 4 %2D A6L2C6": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D4%2Dt %2D %2D A0T2L6 %2D ESA%2DEA Geotechnical Rpts Appendix A Maps ERM TERRAIN 1%2D20k 014 ": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B2%2D19 %2D ESA Section 8 Inspection Monitoring and Follow_Up %2D A1X1W3": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D2LL %2D KXL ESA %2D Appendix A Part 6 of 14 %2D A1I9X7 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D5%2Dw %2D %2D A0T3E4 %2D ESA%2DEA Tech Rpts Soils Appendix G Env Res Maps SOILS 1%2D20k 018": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D11d %2D Alignment Sheet %2D Alberta 16 (A0Y0R4)": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D3%2Dv %2D %2D A0T2H9 %2D ESA%2DEA Grizzly and Black Bear Tech%2DBear 1": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "ExternalPaperOnly_e (14)": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D02%2D23 %2D NGTL Horn River Project %2D ESA Appendix 3 Rare Plant Part 4 of 5 %2D A1R8F0 ": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "C21%2D05%2D01 NGTL%2DESA%2DTechnical%2DReview%2DCompiled%2DDocument%2DFINAL_23%2D9%2D15 %2D A4V5I4": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B2%2D33 %2D Volume IIA %2D ESA %2D Appendix 10 %2D Socio%2DEconomic Supporting Study Report %2D A3E3A8": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A3J0J3 %2D ESA %2D Technical Report Figures 6 to 8 and Soils Report": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "A3D8J7 %2D ESA Appendix II Main and Figures 1%2D15": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B%2D01Z %2D Volume 4 %2D Environmental Assessment Report %2D Socio%2DEconomic Assessment A0W9J4": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D11cc %2D Alignment Sheet %2D Manitoba 10 (A0Y0T9 )": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D3%2Dh %2D %2D A0T2G5 %2D ESA%2DEA Fish Atlas Existing 2 of 5": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A0Q2I6 %2D Environmental and Socio%2DEconomic Assessment": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B35%2D9 %2D ESA_Update_September_30th_Surface_Water_Section_4(b) %2D A2D7Q6 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "Attachment %2D ESA %2D 6 of 11 %2D A3V4G2": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A72401%2D36 V4 24 ESA Appendix H to Appendix K %2D A4T1C6": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A74787%2D16 V2 %2D ESA_Amendment_Appendix_D_Part12 %2D A4W7Z6": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "B%2D3qq %2D Alignment Sheet %2D Alberta 43  %2D A0X2V0": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A76850%2D4 Attach_1%2D2a%2DESA_TDR_Inter_Tbl %2D A4Z9I4": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A2S7S1 %2D MRPL Replacement ESA": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "08_ESA_FINAL_Appendix03_pt2of2 %2D A4C2U6": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D4%2D aa %2D %2D  A0T2Q3 %2D ESA%2DEA Geotechnical Rpts Appendix A Maps ERM TERRAIN 1%2D20k 21 ": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1J4Z3 %2D ESA Appendix G %2D NEB Interaction and Detailed Analysis Tables": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D2b Vol II %2D ESA %2D Section 2 %2D Project Description A0Y1T8": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A2A0E2 %2D Harvest Gething ESA Appendix 2": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "A1X9F6 %2D ESA Appendix 5": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1W4J3 %2D ESA Sections 6.5": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A0R8X7 %2D Stittsville ESA %2D Appendix A (Aerial Mosaics) %2D Part 3": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A0U5Q6 %2D Environmental Assessment": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A1Z5V9 %2D Cutbank%2DMusreau Area Expansion %2D ESA_Part 5 of 6": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D7%2D u %2D %2D A0T3K0 %2D ESA%2DEA Heritage Resources Rpt Appendix A %2D Env Res Map 1%2D20k 20": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A74788%2D14 V2 %2D ESA_Amendment_Appendix_D_Part31 %2D A4W8C8": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "B%2D11kk  %2D Alignment Sheet %2D Manitoba 18  (A0Y0U7)": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1X7R1 %2D ESA %2D Appendix 4 %2D Vegitation": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A0K7Y3 %2D Environmental and Socio%2DEconomic Assessment": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B2%2D9 %2D Vantage Pipeline Project Vol II ESA Section 7(a) %2D A1X5X4": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A0R3X0 %2D SEACOR App D Phase I ESA %2D Stump BC": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A74792%2D8 V3 %2D ESA_Amendment_Appendix_C_Part8 %2D A4W8L1": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A0S7H0 %2D Project Description": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D4%2D v %2D %2D A0T2L8 %2D ESA%2DEA Geotechnical Rpts Appendix A Maps ERM TERRAIN 1%2D20k 016 ": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A87033%2D18 ESA_App_B%2D1_AQ_Tech_CS2_Part1_of_5 %2D A5V8E8": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A73897%2D15 15 Vaughan Mainline Expansion Project %2D ESA_AppB (6 of 9) %2D A4V3Q8": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "B%2D6%2Dr %2D %2D A0T3G9 %2D ESA%2DEA Tech Reports %2D Vegetation Env Res Maps 1%2D20k 15": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B1%2D33 %2D 24_1313340047_TCPL_CCP_ESA_FINAL_AppE_Part1 %2D A3V4R1": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D1m  %2D Groundbirch ESA_NEB_10of14 (A1J6J2)": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A0W5G3 %2D ESA Appendix F%2D Caribou Protection Plan": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1W4J4 %2D ESA Main Sections 6.6 %2D 6.10": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A3K1F3 %2D Supplemental Environmental Filing %2D Part 3 of 7": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B%2D3gg %2D Alignment Sheet %2D Alberta 33  %2D A0X2U0 ": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A3E0R4 %2D Line 2 Replacement ESA %2D 6 of 21": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B3%2D17 %2D Appendix 06 %2D ESA Appendix 12 %2D Decommissioning Environmental Technical Report Part 08 of 14 %2D A4E7E7": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A0X4F1 %2D Environmental Assessment": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "Attachment 1 to NEB IR No. 1.8 %2D ESA %2D A3Z9L2": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A0T6S7 %2D Environmental Assessment": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A90753%2D12 Hines Creek Receipt MS Phase 1 ESA %2D Final %2D A6C4W3": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A0L0I7 %2D Environmental and Socio%2DEconomic Assessment": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D2e Vol II %2D ESA %2D Section 5 (Part 1) %2D ESE Setting A0Y1U1": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B2%2D11%2D Volume II %2D ESA %2D Appendix 2 %2D Environmental Alignment Sheet Package %2D Map 8 to 16  %2D Pt 2 of 8 %2D A3E2Y6 ": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A3H4W6 %2D Attachment 8A %2D ESA %2D Appendix D Part 5 of 10": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D3%2Dg %2D %2D A0T2G4 %2D ESA%2DEA Fish Atlas Existing 1 of 5": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D02%2D47 %2D NGTL Horn River Project %2D ESA Appendix 9 Align Sheets Part 3 of 3 %2D A1R8H4 ": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D01AA  %2D Volume 4 %2D Environmental Assessment Report %2D Effects of the Environment A0W9J5": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D3%2Dl %2D %2D A0T2G9 %2D ESA%2DEA Fish Atlas Glossary Key": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A1W6X7 %2D ESA Appendix 4 (1 of 2)": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B8%2D20 %2D North_Montney_ESA_Sec 8 REVISED %2D A3V1U7": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "B%2D11c %2D Alignment Sheet %2D Alberta 15 (A0Y0R3)": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A0L7Z6 %2D ESA %2D Appendix 1 Part A %2D Figures": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A0X4E8 %2D Environmental Assessment": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B6%2D13 %2D Appendix 06 %2D ESA Appendix 7 %2D Aquatics Technical Report Part 1 of 7 %2D A4E7A6": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B3%2D28 %2D Appendix M 2010 Soil Survey of Enbridge Bakken Pump Station %2D A1X1Z5": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A2S1L1 %2D Attachment C Environment and Socio%2DEconomic Assessment %2D Maple Creek Pipeline": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "15_ESA_FINAL_Appendix09 %2D A4C2V3": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A0W5G2 %2D ESA Appendix E %2D Archaeological Impact Assessment": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1W6X3 %2D ESA Appendix 2 (2 of 3)": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A72401%2D23 V4 11 ESA Appendix E%2DPart 1 of 4 %2D A4T1A3": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A0R3W5 %2D SEACOR App B Phase I ESA %2D Rearguard Site Loc Plan": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "B%2D2n Vol II %2D ESA %2D Section 8 %2D Inspection Monitoring%2DFollowup A0Y1V0": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D8%2Dbb %2D %2D A0T3R8 %2D ESA%2DEA Wetlands Rpts Appendix G %2D Wetland Fish Habitat Env Res Map 1%2D20k 21": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B2%2D13 %2D Volume II %2D ESA %2D Appendix 2 %2D Environmental Alignment Sheet Package %2D Map 26 to 35  %2D Pt 4 of 8 %2D A3E2Y8": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B2%2D19 %2D Vantage Pipeline Project Vol II ESA Section 15(c) %2D A1X5Y4": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B%2D2U Volume III %2D ESA %2D Align Sheets (Part 4) (A0Z1A6)": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D02%2D37 %2D NGTL Horn River Project %2D ESA Appendix 6 TLU Report Part 7 of 11 %2D A1R8G4 ": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B5%2D22 %2D Appendix 06 %2D ESA Appendix 2 %2D Environmental Alignment Sheet Package Part 08 of 18 %2D A4E6Y2": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1X7Q4 %2D ESA %2D Part 1 of 4": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A0L5U1 %2D ESA Rep G": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "ExternalPaperOnly_e (12)": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A1R5X2 %2D Appendix 4 %E2%80%93 ESA A4 Wildlife Survey": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A1K4K8 %2D APPENDIX 7 %2D ESA Part 1": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B35%2D26 %2D ESA_Update_September_30th_App_B_Part_3 %2D A2D7S3 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B1%2D25 %2D 16_1313340047_TCPL_CCP_ESA_FINAL_AppD_Part6 %2D A3V4Q3": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A1K0D1 %2D Albright North Crossover %2D 5680 ESA Part 1 of 4": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D8%2Dc %2D  %2D A0T3L3 %2D ESA%2DEA Wetlands Report Part 3": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B18%2D10 %2D Supplemental ESA %2D Appendix 4b %2D Wetlands Evaluation %2D A3L5A5": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B2%2D11 %2D ESA Section 5 Baseline Part 8 %2D A1X1V5": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D5%2Ds %2D %2D A0T3E0 %2D ESA%2DEA Tech Rpts Soils Appendix G Env Res Maps SOILS 1%2D20k 014": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "Attach 11 %2D ESA %2D APPENDIX_F %2D A3X5F3": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A%2D1 %2D Draft Scope of the Environmental Assessment %2D Enbridge Pipelines Inc., Proposed Line 4 Extension A0Z8X5 ": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D6%2Di %2D %2D A0T3G0 %2D ESA%2DEA Tech Reports %2D Vegetation Env Res Maps 1%2D20k 06": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D1AG  %2D ESA %2D NWML_KomieExt_12_of_17  %2D A2F4Q0": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D1%2Dbb %2D ESA %2D Well water search %2D Volume II %2D Appendix VI to ESA %2D ACCE  Application %2D A0X6A4  ": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A3H4V9 %2D Attachment 8A %2D ESA %2D Appendix B Part 1 of 2": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "A63951%2D35 V4 %2D ESA_Appendix K TransCanada s HSE Commitment %2D A4D9L3": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B2%2D23 ESA_Appendix_L_Part1of3 (A3Q6H9)": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A0K4W4 %2D Envionmental and Socio%2DEconomic Assessment": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A72401%2D11 V3 03 ESA Section 5%2DPart 2 %2D A4T0Z1": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A81325%2D6 Section 5 %2D ESA %2D Interactions Table %2D A5I1L3": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A74788%2D17 V2 %2D ESA_Amendment_Appendix_D_Part34 %2D A4W8D4": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A98624%2D10 09 EDML_ESA_PART_A %2D A6T2G2": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A3F8C1 %2D ESA Appendicies Part 1 of 10": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D14r %2D Supplemental ESA 15 of 17 A1G4R0": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D11aa %2D Alignment Sheet %2D Manitoba 08 (A0Y0T7) ": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D2gg %2D KXL ESA %2D Appendix A Part 1 of 14 %2D A1I9X2 ": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A2A6W0 %2D 2012 Eastern Mainline Expansion ESA_part 2 of 3": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "B2%2D28 %2D Volume IIA %2D ESA %2D Appendix 7 %2D Wetland Evalution %2D App a %2D Health Function Site Cards Pt 2 %2D A3E3A3": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A1C4E4 %2D Appendix D ESA Sec 4.0 pp 19%2D54": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B5%2D11 %2D Appendix 06 %2D ESA Appendix 1A %2D Pipeline Environmental Protection Plan Part 1 of 3 %2D A4E6X1": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B5%2D23 %2D V5A_ESA_15of16_BIOPHYSICAL %2D A3S1R2": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D2E Brunswick Pipeline SJ River EA_Part 4 of 5 (A1C4W4)": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B3%2D01 %2D Appendix 06 %2D ESA Appendix 9 %2D Vegetation Technical Report Part 1 of 5 %2D A4E7D1": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A0E3S0 %2D Environmental Assessment": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B1%2D18 %2D ESA Section 5 to 11 %2D A2A6Q4": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "B2%2D13 %2D ESA Section 5 Baseline Part 10 %2D A1X1V7": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A81160%2D19 EIE_QC%2DNH_Resume_Final_BR %2D A5H8K7": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B%2D5%2Dl %2D %2D A0T3D3 %2D ESA%2DEA Tech Rpts Soils Appendix G Env Res Maps ERM SOILS 1%2D20k 07": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D3ss %2D Alignment Sheet %2D Alberta 45  %2D A0X2V2": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D4b %2D Alignment Sheet %2D Manitoba 02  %2D A0X2K9": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A1D3I9 %2D Archaeological Impact Assessment %2D Permit 2002%2D202 %2D plates 3 %2D 4": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1V2D7 %2D Cutbank Supplemental Rare Plant Survey Part 1 of 2": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B5%2D31 %2D Appendix 06 %2D ESA Appendix 2 %2D Environmental Alignment Sheet Package Part 17 of 18 %2D A4E6Z1": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D3m %2D Alignment Sheet %2D Alberta 13  %2D A0X2S0 ": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D01X %2D Volume 4 %2D Environmental Assessment Report %2D Assessment Scope and Methods A0W9J2 ": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A%2D5 %2D Letter and Scope of the Environmental Assessment to Federal and Responsible Authorities and GH%2D3%2D2008 List of Parties  (A1E5V8 )": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B2%2D8 %2D Vantage Pipeline Project Vol II ESA Section 6 %2D A1X5X3": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B2%2D21 %2D Vantage Pipeline Project Vol II ESA Section 15(e) %2D A1X5Y6": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B%2D2AA Volume III %2D ESA %2D Align Sheets (Part 10) (A0Z1C2)": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1U2X4 %2D Cutbank River Lateral Loop (Bald Mountain) ESA_rev1_part_8_of_13": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B%2D3%2Dz %2D %2D A0T2I3 %2D ESA%2DEA Palaeontology Tech%2DPaleo 1 Report": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1A0G2 %2D Appendix 5 Figure 4.3%2D17": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B%2D1%2Dff %2D ESA %2D Soil chemistry results %2D Volume II %2D Appendix X to ESA %2D ACCE Application %2DA0X6A8  ": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "B2%2D04_ESA_Main_Sec_1_to_5_Part4of12 %2D A4K2Q9": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B35%2D2 %2D ESA_Update_September_30th_Consultation_Sections_1 %2D A2D7L9 ": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D01LL %2D Volume 4 %2D Environmental Assessment Report %2D Appendix G A0W9K6": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B1%2D36 %2D 27_1313340047_TCPL_CCP_ESA_FINAL_AppE_Part4 %2D A3V4R4": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D1%2Dt %2D ESA p.6%2D1 to 15%2D8 %2D Volume II %2D ESA %2D Sections 6 %2D 15 %2D A0X5Z6 ": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "B2%2D15 %2D ESA Section 5 Baseline Part 12 %2D A1X1V9": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A0K7S2 %2D ESA Sections 1 to 5": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D8%2Dm %2D %2D A0T3Q3 %2D ESA%2DEA Wetlands Rpts Appendix G %2D Wetland Fish Habitat Env Res Map 1%2D20k 06": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B6%2D17 %2D Appendix 06 %2D ESA Appendix 7 %2D Aquatics Technical Report Part 5 of 7 %2D A4E7C0": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "Attachment %2D ESA %2D 1 of 11 %2D A3V4F8": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D02%2D19 %2D NGTL Horn River Project %2D ESA Appendix 2 Wetland Report Part 4 of 4 %2D A1R8E6 ": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A0U4D0 %2D NEB %2D Section 58 Application %2D Section 9 ESA Part 7": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1D2W4 %2D ESA for Red Deer River Re%2Droute %2D Part 1 of 3": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D1%2Ds %2D ESA p.5%2D1 to 5%2D52 %2D  Volume II %2D ESA %2D Section 5 %2D  A0X5Z5  ": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A3F6V8 %2D Line 3 Replacement Project ESA %2D Part 1 of 16": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A1U2X7 %2D Cutbank River Lateral Loop (Bald Mountain) ESA_rev1_part_11_of_13": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A90753%2D1 2018%2D03%2D23 %2D Order ZO%2DN081%2D002%2D2018 Cond. 5 Phase I ESA_Cvr Ltr %2D A6C4V2": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A2C4R4 %2D Environmental Assessment": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1A0G6 %2D Appendix 5 Figure 4.4%2D2": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B2%2D6 %2D Vantage Pipeline Project Vol II ESA Section 4(b) %2D A1X5X1": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A2A0D9 %2D Harvest Gething ESA Part 1": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "Attachment 08_07_ESA_FINAL_Appendix03_Pt01 %2D A3W5R1": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D2z  %2D KXL ESA %2D Section 13 Part 2 of 3 %2D A1I9W5": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "B%2D2r %2D KXL ESA %2D Section 10 Part 14 of 15 %2D A1I9V7 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D2ff %2D KXL ESA %2D Section 18 to 24 %2D A1I9X1": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A78640%2D1 2015 Meter Stations and Laterals Abandonment%2DCondition 5 Phase I ESA %2D A5E0J3": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A74787%2D14 V2 %2D ESA_Amendment_Appendix_D_Part10 %2D A4W7Z4": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A73674%2D25 Section_5%2DESA%2DAppB%2DVegetation%2D2of2 %2D A4V0R8": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "A1A0F5 %2D Appendix 5 Figure 4.3%2D10": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B%2D5%2Dd %2D %2DA0T3C5 %2D ESA%2DEA Tech Rpts Soils Appendix G Env Res Maps ERM SOILS 1%2D20k 00 Legend": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A0R3X2 %2D SEACOR App E Phase I ESA %2D Juliet 2 Site Location Plan": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "B%2D02%2D41 %2D NGTL Horn River Project %2D ESA Appendix 6 TLU Report Part 11 of 11 %2D A1R8G8 ": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1U7C5 %2D 36 %2D ESA_REV1_Aug_2010_Part_15_of_23": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B3%2D3 %2D Vol 6A P1 %2D Pipelines and Tank Terminal ESA (Part 3 of 5) %2D A1T0F3": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "B%2D3bb %2D Alignment Sheet %2D Alberta 28  %2D A0X2T5": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D2L %2D KXL ESA %2D Section 10 Part 8 of 15 %2D A1I9V1 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "Line 11 Westover Segment Replacement Project ESA Part 3 %2D A3T0Z2": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B6%2D14 %2D Appendix 06 %2D ESA Appendix 7 %2D Aquatics Technical Report Part 2 of 7 %2D A4E7A7": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A81160%2D36 7178_eiccf3_am_035_mndetails_151111a %2D A5H8Q4": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "04_ESA_FINAL_Appendix02_pt1of3 %2D A4C2U2": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "A1W4J8 %2D ESA Appendix A EPP appendices": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B2%2D3 %2D Volume II %2D ESA %2D Section 1 %2D Introduction %2D  Prt 2 of 2 %2D A3E2X8": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A73674%2D13 Section_5%2DESA%2DAppB%2DAir_Quality%2D2of2 %2D A4V0Q4": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A73674%2D12 Section_5%2DESA%2DAppB%2DAir_Quality%2D1of2 %2D A4V0Q3": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A0S5J4 %2D ESA %2D Appendix A9.3 Pre%2DImpact Assessment %2D Part 3": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "Attach 11%2D1 Part1of3_MeikleRiverD_NEBs58_ESA_20141216 %2D A4G1Z8": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A3D8J6 %2D ESA Main Section and Appendix I": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A0K7S3 %2D ESA Sections 6 to 10": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B5%2D16 %2D Appendix 06 %2D ESA Appendix 2 %2D Environmental Alignment Sheet Package Part 02 of 18 %2D A4E6X6": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D8%2Dy %2D %2D A0T3R5 %2D ESA%2DEA Wetlands Rpts Appendix G %2D Wetland Fish Habitat Env Res Map 1%2D20k 018": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D5%2Dj %2D %2D A0T3D1 %2D ESA%2DEA Tech Rpts Soils Appendix G Env Res Maps ERM SOILS 1%2D20k 05": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1J6C2 %2D 6125acm_IPF Corridor Expansion ESA_FINAL revised April 30 2009": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A73897%2D10 10 Vaughan Mainline Expansion Project %2D ESA_Sec 1 to 4 (1 of 9) %2D A4V3Q3": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D3%2Dq %2D %2D A0T2H4 %2D ESA%2DEA Fish and Fish Habitat Appendix Env Res Maps ERM WETLAND FISH%2DHABITAT 1%2D20k 01to07": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D2p %2D Redwillow ESA Section 10 %2D A1C3X0 ": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A79036%2D16 16 Peace River Mainline Abandonment %2D Appendix 9 %2D ESA Attachment C to I %2D A5E6A7": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B%2D1AL  %2D ESA %2D NWML_KomieExt_17_of_17  %2D A2F4Q5": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "B8%2D21 %2D North_Montney_ESA_Sec 9 REVISED %2D A3V1U8": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "B%2D8%2De %2D %2D  A0T3L5 %2D ESA%2DEA Wetlands Report Part 5": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A72401%2D10 V3 02 ESA Section 1 to Section 5%2DPart 1 %2D A4T0Z0": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A0R3X5 %2D SEACOR App F Phase I ESA %2D Port Kells BC": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B18%2D9 %2D Supplemental ESA %2D Appendix 4a %2D Wetlands Evaluation %2D A3L5A4": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A3F6W9 %2D Line 3 Replacement Project ESA %2D Part 12 of 16": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A90756%2D1 Order ZO%2DN081%2D002%2D2018 Cond 6 Phase II ESA Plan %2D A6C4Y4": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A3I8H8 %2D Attachment 09C %2D ESA_Section6%2D11": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A0X3T5 %2D Environmental Assessment": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B6%2D11 %2D Appendix 06 %2D ESA Appendix 6 %2D Environmental Noise Impact Assessment Part 2 of 3 %2D A4E7A4": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "A0R3W6 %2D SEACOR App B Phase I ESA %2D Rearguard BC": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A0W5G1 %2D ESA Appendix D%2D Site Photos": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A0W8T7 %2D AMEC Earth %2D Environmental letter to Environment Canada": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A3A6C0 %2D 7689_APP1_EPP_2of2": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B1%2D22 %2D Appendix 10 ESA %2D Appendices B and C %2D A1T0Y9": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "A2K2F2 %2D Appendix 2 %2D ESA Appendix B Part 3 of 3": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B%2D5%2Dz %2D %2D A0T3E7 %2D ESA%2DEA Tech Rpts Soils Appendix G Env Res Maps SOILS 1%2D20k 21": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A0X4E9 %2D Environmental Assessment": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B%2D8%2Dq %2D %2D A0T3Q7 %2D ESA%2DEA Wetlands Rpts Appendix G %2D Wetland Fish Habitat Env Res Map 1%2D20k 010": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D4%2Dy %2D %2D A0T2Q1 %2D ESA%2DEA Geotechnical Rpts Appendix A Maps ERM TERRAIN 1%2D20k 019 ": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D4j %2D Alignment Sheet %2D Manitoba 10  %2D A0X2L7 ": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D3%2Db %2D %2D A0T2F9 %2D ESA%2DEA Env Site Assessments Report 2": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A1H1R2 %2D ESA %2D Part 2 of 3": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A87481%2D5 Grew Lake Phase 1 ESA Final %2D A5W5C7": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D9%2Ds %2D %2D A0T3U1 %2D ESA%2DEA Tech Rpts Wildlife and Wildlife Habitat Appendix A Env Res Maps 1%2D20k 12": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B5%2D18 %2D V5A_ESA_10of16_BIOPHYSICAL %2D A3S1Q7": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B35%2D5 %2D ESA_Update_September_30th_Route_%2D_Site_Selection_Section_2(c) %2D A2D7Q2 ": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B2%2D12 %2D Volume II %2D ESA %2D Appendix 2 %2D Environmental Alignment Sheet Package %2D Map 17 to 25  %2D Pt 3 of 8 %2D A3E2Y7": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A80172%2D6 Section 4 %2D ESA %2D AppA %2D EPP 1of3 %2D A5G2X0": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B5%2D09 %2D Appendix 06 %2D ESA Part 09 of 10 %2D A4E6W9": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "03 ESA MAIN Section06_Part2of3 %2D A4F2Z4": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D3pp %2D Alignment Sheet %2D Alberta 42  %2D A0X2U9": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A0S5I5 %2D ESA %2D Figure 9.4(a) Changes in Land Use 1950": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D11gg  %2D Alignment Sheet %2D Manitoba 14 (A0Y0U3)": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A90753%2D25 Tangent East Receipt MS Phase 1 ESA %2D Final %2D A6C4X6": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "Attachment 13 %2D ESA Vol%2D3 %2D A3S6R0": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "B1%2D27 %2D 18_1313340047_TCPL_CCP_ESA_FINAL_AppD_Part8 %2D A3V4Q5": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B2%2D23 %2D Volume IIA %2D ESA %2D Appendix 6 %2D Aquatic Assessment %2D A3E2Z8": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B2%2D14 %2D Volume II %2D ESA %2D Appendix 2 %2D Environmental Alignment Sheet Package %2D Map 36 to 45  %2D Pt 5 of 8 %2D A3E2Y9": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A74508%2D2 Appendix 6.1 %2D ESA Part 1a of 10 %2D A4W2R0": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B5%2D14 %2D Appendix 06 %2D ESA Appendix 1B %2D Facility Environmental Protection Plan %2D A4E6X4": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A0X4E7 %2D Environmental Assessment": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A1Y7Z1 %2D ESA Report Appendix F DFO Ont Operational Statement": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "B%2D11LL  %2D Alignment Sheet %2D Manitoba 19 (A0Y0U8)": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D02%2D14 %2D NGTL Horn River Project %2D ESA Appendix 1 Aquatic Report Part 4 of 5 %2D A1R8E1 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D02%2D6 %2D NGTL Horn River Project %2D ESA Effects Assessment %2D A1R8D3 ": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D9%2D l %2D %2D A0T3T4 %2D ESA%2DEA Tech Rpts Wildlife and Wildlife Habitat Appendix A Env Res Maps 1%2D20k 05": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D3e %2D Alignment Sheet %2D Alberta 05  %2D A0X2R2 ": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A3E0S8 %2D Line 2 Replacement ESA %2D 20 of 21": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D1f %2D ESA Report Section 5.0 Environmental and Socio%2DEconomic Setting  (A1D5R6 )": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B3%2D12 %2D Appendix 06 %2D ESA Appendix 12 %2D Decommissioning Environmental Technical Report Part 03 of 14 %2D A4E7E2": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D9%2Dcc %2D %2D A0T3V1 %2D ESA%2DEA Tech Rpts Wildlife and Wildlife Habitat Appendix A Env Res Maps 1%2D20k 22": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D3i %2D Alignment Sheet %2D Alberta 09   %2D A0X2R6": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D1Z  %2D ESA %2D NWML_KomieExt_05_of_17  %2D A2F4L3": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B35%2D34 %2D ESA_Update_September_30th_App_B_Part_11 %2D A2D7T1 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D14n %2D Supplemental ESA 11 of 17 A1G4Q6": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A87033%2D15 ESA_Main_Part1_of_3 %2D A5V8E5": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A73674%2D18 Section_5%2DESA%2DAppB%2DSoil%2D2of7 %2D A4V0Q9": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "A81160%2D12 7178_eicbf3_am_015_pays_151026 %2D A5H8J6": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B%2D1AJ  %2D ESA %2D NWML_KomieExt_15_of_17  %2D A2F4Q3": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "Section_5%2DESA%2DAppB%2DFisheries %2D A4U3W9": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B2%2D4 %2D Vantage Pipeline Project Vol II ESA Sections 2 and 3 %2D A1X5W9": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D14h %2D Supplemental ESA 5 of 17 A1G4Q0 ": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A2K5C2 %2D ESA Mica Creek Pipeline Project Detailed Analysis Table": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D4e %2D Alignment Sheet %2D Manitoba 05  %2D A0X2L2": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "Attachment 12c %2D ESA Section 7%2DAppendix_A %2D A4F8J7": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "B%2D16d %2D ESA %2D Section 5 %2D Pages 103%2D104  (A0Y0X2 )": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A74788%2D11 V2 %2D ESA_Amendment_Appendix_D_Part28 %2D A4W8C3": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "B3%2D17 %2D Vol 6C %2D Human Environment ESA (Part 2 of 3) %2D A1T0G7 ": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "Appendix 3 %2D ESA Figure %2D A4Q9T8": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A80172%2D12 Section 4 %2D ESA %2D AppB2 %2D Soils 2of2 %2D A5G2X6": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A1X5H2 %2D ESA Appendix 4": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D3c %2D Alignment Sheet %2D Alberta 03   %2D A0X2R0 ": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D4%2Dw %2D %2D A0T2L9 %2D ESA%2DEA Geotechnical Rpts Appendix A Maps ERM TERRAIN 1%2D20k 017 ": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1Y6H6 %2D Grande Prairie Mainline Loop (Karr North and Nosehill Creek Sections) Revised Appendix B of ESA": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B1%2D23 %2D 14_1313340047_TCPL_CCP_ESA_FINAL_AppD_Part4 %2D A3V4Q1": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A94500%2D2 Relief Request ESA Addendum Update %2D A6I2K4": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "ExternalPaperOnly_e (8)": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A87033%2D11 ESA_App_A%2D1_EPP_Pipelines_Part1_of_3 %2D A5V8E1": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D2G Volume II %2D ESA %2D Section 5 %2D ESE Setting (Part3) (A0Z0Z2)": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A1W4L5 %2D ESA Appendix I N4 Loop TLU": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B6%2D06 %2D Appendix 06 %2D ESA Appendix 4 %2D Air Quality Assessment Part 2 of 4 %2D A4E6Z9": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B%2D9%2Dbb %2D %2D A0T3V0 %2D ESA%2DEA Tech Rpts Wildlife and Wildlife Habitat Appendix A Env Res Maps 1%2D20k 21": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A0R4A3 %2D Sec 6 SectionD Hinton ESA_rep": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D3ee %2D Alignment Sheet %2D Alberta 31  %2D A0X2T8": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "Appendix 6 %2D Hardisty ESA Part 6 of 6 %2D A4K0J0": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A3F6X1 %2D Line 3 Replacement Project ESA %2D Part 14 of 16": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B8%2D16 %2D North_Montney_ESA_Sec 4 REVISED %2D A3V1U3": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B2%2D02_ESA_Main_Sec_1_to_5_Part2of12 %2D A4K2Q7": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A2I0K7 %2D ESA Appendix 1 EPP Appendix E (Appendix B)": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D2c %2D Consultation Program A0X2I2 ": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B1%2D42 Appendix 10%2D2_TCPL_KNC_ESA_Appendix E %2D 7 %2D A4A2Q3": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A0R6L8 %2D ESA Appendix D continuted": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B1%2D25 %2D ESA %2D appendices filed separately %2D A1U7Y0": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A1U7C1 %2D 32 %2D ESA_REV1_Aug_2010_Part_11_of_23": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1C0T3 %2D 18 Vol II ESA Attachment F": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D1%2Djj %2D ESA %2D EPP 36 pages %2D Volume II %2D Part 4 %2D  Appendix XI to ESA %2D ACCE Application%2D A0X6C2 ": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D14p %2D Supplemental ESA 13 of 17 A1G4Q8": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A0U1F8 %2D Environmental Assessment": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D2t %2D KXL ESA %2D Section 11 Part 1 of 2 %2D A1I9V9": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "B%2D3%2Dk %2D %2D A0T2G8 %2D ESA%2DEA Fish Atlas Existing 5 of 5": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A0X6D7 %2D Environmental Noise Survey and Impact Assessment": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "A2I0K5 %2D ESA Main Section 6.2.5 to 11": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A3F4K9 %2D SET_ESA_Part7_Appendix6": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B%2D1L%2D Groundbirch ESA_NEB_9of14 ( A1J6J1 )": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A1U0E1 %2D Environmental and Socio%2DEconomic Assessment Report": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D3u %2D Alignment Sheet %2D Alberta 21  %2D A0X2S8": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D8%2Do %2D %2D  E0T3Q5 ESA%2DEA Wetlands Rpts Appendix G %2D Wetland Fish Habitat Env Res Map 1%2D20k 08": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1R2C9 %2D Appendix 6 %E2%80%93 ESA Part 7 of 9 Appendix D": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A1A0F8 %2D Appendix 5 Figure 4.3%2D13": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B18%2D7 %2D Supplemental ESA %2D Appendix 3 %2D Weed Survey %2D A3L5A2": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A1U7D5 %2D 43 %2D ESA_REV1_Aug_2010_Part_22_of_23": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B1%2D33 Appendix 10%2D2_TCPL_KNC_ESA_Appendix A %2D 2 %2D A4A2L4": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B1%2D23 %2D ESA Appendix E Part 1 of 2 %2D A2A6Q9": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B35%2D14 %2D ESA_Update_September_30th_Vegetation_Section_8(b) %2D A2D7R1 ": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "ExternalPaperOnly_e": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A2A1D7 %2D Edmonton Terminal Manifold 213 Extension Phase II ESA": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B8%2D31 %2D North_Montney_ESA_Appendix_J_REVISED %2D A3V1V8": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "Attach 11 %2D ESA %2D Part 1 %2D A3X5E9": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A3L3D4 %2D Appendix 5 %2D ESA %2D Appendices": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D3p %2D Alignment Sheet %2D Alberta 16  %2D A0X2S3 ": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D9%2D p %2D %2D A0T3T8 %2D ESA%2DEA Tech Rpts Wildlife and Wildlife Habitat Appendix A Env Res Maps 1%2D20k 09": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A63951%2D5 V4 %2D ESA_Appendix B3_CS 139 Belleville %2D A4D9I0": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A74792%2D5 V3 %2D ESA_Amendment_Appendix_C_Part5 %2D A4W8K0": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "B3%2D06 %2D Appendix 06 %2D ESA Appendix 10 %2D Wildlife Technical Report Part 1 of 2 %2D A4E7D6": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B2%2D20 %2D ESA Section 9 Conclusions %2D A1X1W4": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A96812%2D12 Appendix 7%2D1 ESA Supplemental Part 1 of 3 %2D A6Q2Y5": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1X5H7 %2D ESA Part 3 of 3": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A0W5F7 %2D Environmental and Socio%2DEconomic Assessment": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B3%2D8 %2D Vol 6A P2 %2D Pipelines and Tank Terminal ESA (Part 3 of 6) %2D A1T0F8 ": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "B%2D1e  %2D Groundbirch ESA_NEB_2of14 (A1J6I4)": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D2mm %2D KXL ESA %2D Appendix A Part 7 of 14 %2D A1I9X8 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D2n %2D KXL ESA %2D Section 10 Part 10 of 15 %2D A1I9V3": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A2I0K9 %2D ESA Appendix 2 Environmental Alignment Sheets": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A74792%2D6 V3 %2D ESA_Amendment_Appendix_C_Part6 %2D A4W8K4": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A3F4K5 %2D SET_ESA_Part3_Appendices2and3": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "B3%2D5 %2D Vol 6A P1 %2D Pipelines and Tank Terminal ESA (Part 5 of 5) %2D A1T0F5 ": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B18%2D27 %2D Supplemental ESA %2D Appendix 9e %2D Environmental Alignment Sheet Package %2D A3L5D2": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "Line 11 Westover Segment Replacement Project ESA Part 2 %2D A3T0Z1": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B2%2D12_ESA_Main_Sec_1_to_5_Part12of12 %2D A4K2R7": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A1U7C4 %2D 35 %2D ESA_REV1_Aug_2010_Part_14_of_23": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A76985%2D4 V11_Sec3_ESA_Assessment_Method %2D A5A6I4": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A1J5E6 %2D Plains Midstream Connection_FINAL ESA": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B%2D10a%2D ESA Appendix 7J %2D Three Lift Soils Handling Requirement for AB MB ( A0Y0V0)": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "B%2D2H Volume II %2D ESA %2D Section 5 %2D ESE Setting (Part4) (A0Z0Z3)": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A63951%2D3 V4 %2D ESA_Appendix B1_CS 134 Bowmanville %2D A4D9H8": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D9%2Dh %2D %2D A0T3L8 %2D ESA%2DEA Wetlands Rpts Appendix G %2D Wetland Fish Habitat Env Res Map 1%2D20k 01": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A2I0L0 %2D ESA Appendix 3 Soils Report": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "Ruger Energy Phase I ESA Alsask Pipeline A317Z9 final draft %2D A4L2A9": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D02%2D43 %2D NGTL Horn River Project %2D ESA Appendix 8 EPP Part 1 of 2 %2D A1R8H0 ": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B2%2D5 %2D ESA Section 5 Baseline Part 2 %2D A1X1U9": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A1X5H6 %2D ESA Part 2 of 3": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A1R2C7 %2D Appendix 6 %E2%80%93 ESA Part 5 of 9 Appendix B": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A3H4W7 %2D Attachment 8A %2D ESA %2D Appendix D Part 6 of 10": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D3j %2D Alignment Sheet %2D Alberta 10 %2D A0X2R7": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D5%2Dy %2D %2D A0T3E6 %2D ESA%2DEA Tech Rpts Soils Appendix G Env Res Maps SOILS 1%2D20k 20": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A98972%2D2 DPCN NGTL2021 SVS ESA Tech Review %2D A6T7S6": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A3H4W2 %2D Attachment 8A %2D ESA %2D Appendix D Part 1 of 10": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D11ii %2D Alignment Sheet %2D Manitoba 16 (A0Y0U5 )": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D12c %2D ESA Section 18 %2D Page 8%2D9 (A0Y0V5 )": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "Attachment 12b %2D ESA Sections 5%2D6 %2D A4F8J6": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A90753%2D6 Bear Canyon West Receipt MS Phase 1 ESA %2D Final %2D A6C4V7": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A76969%2D3 V10_Appendix_10%2D2_Consolidated_Application_and_ESA_Concordance_Table %2D A5A4U8": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D2B Brunswick Pipeline SJ River EA_Part 1 of 5 (A1C4W1)": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B3%2D7 %2D Vol 6A P2 %2D Pipelines and Tank Terminal ESA (Part 2 of 6) %2D A1T0F7 ": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "A0S5J2 %2D ESA %2D Appendix A9.3 Pre%2DImpact Assessment %2D Part 1": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A2T3H4 %2D Section 9 %2D Appendix 9%2D1 ESA (Part 4 of 5)": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A1U2W7 %2D Cutbank River Lateral Loop (Bald Mountain) ESA_rev1_part_1_of_13": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B35%2D19 %2D ESA_Update_September_30th_Wildlife_Section_9(d) %2D A2D7R6 ": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B3%2D39_ESA_Appendix_6A_Aquatics_TDR_Part4of4 %2D A4K2U9": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B3%2D27_ESA_Appendix_2_Alignment_Sheets_Part3of5 %2D A4K2T3": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1X5H3 %2D ESA Appendix 5": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A94825%2D3 Deep Panuke IR Response No. NEB%2DECA%2D2.6 Attachment (Consolidated ESA) %2D A6I8E1": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "B%2D2t Vol III %2D ESA %2D Part 1 A0Y1V6": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B1%2D32 %2D 23_1313340047_TCPL_CCP_ESA_FINAL_AppD_Part13 %2D A3V4R0": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D30B Further Updates to ESA %2D October 2007 (A1A9R1)": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D02%2D9 %2D NGTL Horn River Project %2D ESA Supplemental Studies %2D A1R8D6 ": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1X8W2 %2D Appendix 17 %2D ESA %2D Nosehill": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "B%2D1o %2D Groundbirch ESA_NEB_12of14 (2) (A1J6J4 )": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D7%2Dj %2D %2D A0T3I9 %2D ESA%2DEA Heritage Resources Rpt Appendix A %2D Env Res Map 1%2D20k 09": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D2ee %2D KXL ESA %2D Section 17 Part 3 of 3 %2D A1I9X0": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B%2D5%2Do %2D %2DA0T3D6 %2D ESA%2DEA Tech Rpts Soils Appendix G Env Res Maps SOILS 1%2D20k 010": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B5%2D10 %2D Appendix 06 %2D ESA Part 10 of 10 %2D A4E6X0": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A3E4S4 %2D ESA Appendix B %2D Air %2D Main": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "02_ESA_MAIN_FINAL_pt2of2 %2D A4C2U0": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "Appendix 6 %2D Hardisty ESA Part 2 of 6 %2D A4K0I6": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A90515%2D10 Steel Reef ESA including Temporary Workspace Descriptions. %2D A6C0J4": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A0W7R4 %2D Environmental Assessment": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D9%2Dee %2D  %2D A0T3V3 %2D ESA%2DEA Tech Rpts Wildlife and Wildlife Habitat Appendix A Env Res Maps 1%2D20k 24": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1W4K0 %2D ESA Appendix C N4 Loop Soils Report": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A2H7D0 %2D Section 9 %2D Appendix 9%2D2 %2D ESA_Sections_7%2D15": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B3%2D9 %2D Vol 6A P2 %2D Pipelines and Tank Terminal ESA (Part 4 of 6) %2D A1T0F9 ": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "1402138_TCPL_SLL_ESA_APPENDIX_A_FINAL %2D A4J6E2": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A0T7K7 %2D Stns 134 and 1703 ESA %2D Appendix C %2D Stn 1703 Air Quality": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B%2D4%2Dn %2D %2D A0T2L0 %2D ESA%2DEA Geotechnical Rpts Appendix A Maps ERM TERRAIN 1%2D20k 08 ": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B18%2D14 %2D Supplemental ESA %2D Appendix 4f %2D Wetlands Evaluation %2D A3L5A9": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B3%2D35 %2D Vol 8B %2D Marine Transportation ESA (Part 10 of 11) %2D A1T0I5 ": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "B%2D14k %2D Supplemental ESA 8 of 17 A1G4Q3": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1W4L1 %2D ESA Appendix H N4 Loop Vol 1 of 2": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D2C Volume II %2D ESA %2D Section 3 %2D Consultation (A0Z0Y8)": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D02%2D30 %2D NGTL Horn River Project %2D ESA Appendix 5 AIA Part 3 of 3 %2D A1R8F7 ": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A0U4C7 %2D NEB %2D Section 58 Application %2D Section 9 ESA Part 4": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1J5A1 %2D ESA Appendix D %2D AIA 6 of 8": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1U7A4 %2D 24 %2D ESA_REV1_Aug_2010_Part_3_of_23": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A2K5C6 %2D ESA Mica Creek Pipeline Project Appendix 4": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A87033%2D13 ESA_App_A%2D1_EPP_Pipelines_Part3_of_3 %2D A5V8E3": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B5%2D13 %2D Appendix 06 %2D ESA Appendix 1A %2D Pipeline Environmental Protection Plan Part 3 of 3 %2D A4E6X3": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D2f  %2D KXL ESA %2D Section 10 Part 2 of 15 %2D A1I9U5": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B2%2D22 %2D Vantage Pipeline Project Vol II ESA Sections 16 and 17 %2D A1X5Y7": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D02%2D35 %2D NGTL Horn River Project %2D ESA Appendix 6 TLU Report Part 5 of 11 %2D A1R8G2 ": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D2h %2D Redwillow ESA Section 5 Part 3 %2D A1C3W2": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B%2D9%2Dd %2D %2D A0T3S6 %2D ESA%2DEA Wildlife and Wildlife Habitat Report Appendices 1 of 2 ": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B3%2D21 %2D Appendix 06 %2D ESA Appendix 12 %2D Decommissioning Environmental Technical Report Part 12 of 14 %2D A4E7F1": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D8%2Dk %2D %2D A0T3Q1 %2D ESA%2DEA Wetlands Rpts Appendix G %2D Wetland Fish Habitat Env Res Map 1%2D20k 04": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A2I0L7 %2D ESA Appendix 9 Interactions Table": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A3E0R3 %2D Line 2 Replacement ESA %2D 5 of 21": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A3D8J9 %2D ESA Appendix II Figures 26%2D28 and Appendices II to IV": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A0W6G2 %2D SNC Lavalin EMF report": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A73674%2D26 Section_5%2DESA%2DAppB%2DWildlife%2D1of2 %2D A4V0R9": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "A3F8C5 %2D ESA Appendicies Part 5 of 10": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A1A0H0 %2D Appendix 5 Figure 4.6%2D1": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D2k %2D KXL ESA %2D Section 10 Part 7 of 15 %2D A1I9V0": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A3E4T4 %2D ESA Appendix G %2D Interaction Table": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B2%2D7  Volume 5 %2D ESA_Appendix_A%2DB (A3Q6G3)": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D2R Volume III %2D ESA %2D Align Sheets (Part 1) (A0Z1A3)": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A1D3J7 %2D Archaeological Impact Assessment %2D Permit 2007%2D344 %2D plates 5 %2D 6": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D3%2Dj %2D %2D A0T2G7 %2D ESA%2DEA Fish Atlas Existing 4 of 5": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B3%2D11 %2D Vol 6A P2 %2D Pipelines and Tank Terminal ESA (Part 6 of 6) %2D A1T0G1 ": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "Appendix 5 %2D ESA %2D Tecnnical Data Report %2D A4D7Y5": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A3F4K4 %2D SET_ESA_Part2_Appendix1": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A2H7D5 %2D Section 9 %2D ESA_Appendix 3_Environmental Protection Plan_Appendices_B%2DH": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D7%2Dm %2D %2D A0T3J2 %2D ESA%2DEA Heritage Resources Rpt Appendix A %2D Env Res Map 1%2D20k 012": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D11o %2D Alignment Sheet %2D Alberta 29 (A0Y0S5 )": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D8%2Dt %2D  %2D A0T3R0 %2D ESA%2DEA Wetlands Rpts Appendix G %2D Wetland Fish Habitat Env Res Map 1%2D20k 013": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B18%2D17 %2D Supplemental ESA %2D Appendix 5 %2D Wildlife Report %2D A3L5C2": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B18%2D25 %2D Supplemental ESA %2D Appendix 9C %2D Environmental Alignment Sheet Package %2D A3L5D0": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A2A0E5 %2D Harvest Gething ESA Appendix 5a": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A90753%2D18 McNeill Crossover Phase 1 ESA %2D Final %2D A6C4W9": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D01Y1 %2D Volume 4 %2D Economic Assessment Report %2D Environmental Setting A0W9L0": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "A99467%2D3 02 Attachment NEB 2.2%2D1_NCC North Star ESA Sections 07 to 09 %2D A6U5F1": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A94156%2D8 2021 NGTL SXP %2D ESA Update %2D Appendix F %2D Wetlands %2D A6H7S2": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A88940%2D1 ESA Location Maps (Page 5 to Page 7) %2D A5Y8I2": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D02A %2D Letter to NEB re %2D Supplemental Filing %2D  ESA %2D Appendix III %2D Economic Effects A0Z7E3 ": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "05 ESA MAIN Section07_Part1of2 %2D A4F2Z6": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D5%2Dn %2D %2D A0T3D5 %2D ESA%2DEA Tech Rpts Soils Appendix G Env Res Maps SOILS 1%2D20k 09": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "Section_5%2DESA%2DAppA%2DCaribou_Mgmt %2D A4U3W7": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "B%2D2m %2D KXL ESA %2D Section 10 Part 9 of 15 %2D A1I9V2": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A1W4J9 %2D ESA Appendix B Acoustics": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "B%2D2D Brunswick Pipeline SJ River EA_Part 3 of 5 (A1C4W3)": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A74508%2D7 Appendix 6.1 %2D ESA Part 5 of 10 %2D A4W2T2": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B18%2D5 %2D Supplemental ESA %2D Appendix 2 %2D Vegetation Survey %2D A3L5A0": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D2s %2D Historical  A0X2J8": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1K4K7 %2D Please refer to ESA": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A1W6X4 %2D ESA Appendix 2 (3 of 3)": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A87033%2D14 ESA_App_A%2D1_EPP_Compressor_Stn %2D A5V8E4": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A3F6V9 %2D Line 3 Replacement Project ESA %2D Part 2 of 16": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A1K0T6 %2D SL Connection ESA": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "C00498%2D1 MHW%2D002%2D2017_Order ZO%2DN081%2D004%2D2017 Cond.5 Ph ll ESA Rpt on Findings %2D A6W0I6": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A1A7E2 %2D HFP Follow%2Dup Environmental Noise Assessment for Bryant Booster Station": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "A87033%2D12 ESA_App_A%2D1_EPP_Pipelines_Part2_of_3 %2D A5V8E2": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B1%2D22%2D ESA Appendix B Part 2 of 2, Appendix C and Appendix D %2D A2A6Q8 ": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A1R5W8 %2D Appendix 4 %E2%80%93 ESA A1 Aquatic Habitat Part 2": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "ExternalPaperOnly_e (4)": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A74788%2D18 V2 %2D ESA_Amendment_Appendix_D_Part35 %2D A4W8D6": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A1W5R5 %2D ESA Phase 2 Part 1 of 4": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B3%2D10 %2D Appendix C Soil_Vegetation and Wetlands Baseline Figures C46%2D52 Part 8 %2D A1X1X7": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1R5W6 %2D Appendix 4 %E2%80%93 ESA Part 1": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A2T3H2 %2D Section 9 %2D Appendix 9%2D1 ESA (Part 2 of 5)": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A79036%2D6 06 Peace River Mainline Abandonment %2D Appendix 9 %2D ESA Attachment B ESIS 2 of 11 %2D A5E5Z7": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A82056%2D2 Hallum Pipeline Phase 2 ESA WP (600%2D221%2D02 WP01) %2D A5J4K8": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D1g  %2D ESA Report Section 6.0 Environmental and Socio%2DEconomic Effects Assessment  (A1D5R7)": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D3%2Da %2D %2D A0T2F8 %2D ESA%2DEA Env Site Assessments%2D1": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B1%2D19 %2D 10_1313340047_TCPL_CCP_ESA_FINAL_AppC %2D A3V4L7": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A0Q2F9 %2D Letter of 2005%2D02%2D16 with Supplementary Tables to ESA": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "Attachment 08_10_ESA_FINAL_Appendix05 %2D A3W5R4": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B2%2D3  ESA_Main_Part_2_of_5 ( A3Q6F9 )": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "A72401%2D22 V4 10 ESA Appendix D%2DPart 3 of 3 %2D A4T1A2": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "B%2D1j%2D  ESA Appendix B Fisheries Habitat Assessment  (A1D5S0)": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B35%2D10 %2D ESA_Update_September_30th_Groundwater_and_Wetlands_Sections_5_and_6 %2D A2D7Q7 ": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D4a %2D Alignment Sheet %2D Manitoba 01  %2D A0X2K8": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B3%2D04 %2D Appendix 06 %2D ESA Appendix 9 %2D Vegetation Technical Report Part 4 of 5 %2D A4E7D4": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A3E0Q9 %2D Line 2 Replacement ESA %2D 1 of 21": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D02%2D40 %2D NGTL Horn River Project %2D ESA Appendix 6 TLU Report Part 10 of 11 %2D A1R8G7 ": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B3%2D6 %2D Appendix C Soil_Vegetation and Wetlands Baseline Figures C%2D20%2D25 Part 4 %2D A1X1X3": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B2%2D14 %2D ESA Section 5 Baseline Part 11 %2D A1X1V8": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A3F6X3 %2D Line 3 Replacement Project ESA %2D Part 16 of 16": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A2S7S7 %2D MRPL Replacement ESA Appendix 6": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A82697%2D1 Coalition%2DBackgrounder%2DKinder%2DMorgan%2DProject.pdf %2D A5K7A3": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "B1%2D20 %2D 11_1313340047_TCPL_CCP_ESA_FINAL_AppD_Part1 %2D A3V4L8": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D02%2D22 %2D NGTL Horn River Project %2D ESA Appendix 3 Rare Plant Part 3 of 5 %2D A1R8E9 ": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D1X  %2D ESA %2D NWML_KomieExt_03_of_17  %2D A2F4L1": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A87033%2D7 ESA_App_H%2D1_Chetwynd Loop_Interim_AIA %2D A5V8D7": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1K4L3 %2D APPENDIX 7 %2D ESA Part 6": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A1W4L3 %2D ESA Appendix H SLP AIA": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D2D Volume II %2D ESA %2D Section 4 %2D Routing (A0Z0Y9)": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B5%2D21 %2D V5A_ESA_13of16_BIOPHYSICAL %2D A3S1R0": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A1W6X1 %2D ESA Appendix 1": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A78970%2D4 Supplemental ESA %2D Part 3 of 3 %2D A5E4Z4": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A2A5S7 %2D Environmental Assessment": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A3F8C9 %2D ESA Appendicies Part 9 of 10": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1G0H4 %2D ESA Appendices A and B (Soils and Vegetation)": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B5%2D19 %2D V5A_ESA_11of16_BIOPHYSICAL %2D A3S1Q8": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B3%2D07 %2D Appendix 06 %2D ESA Appendix 10 %2D Wildlife Technical Report Part 2 of 2 %2D A4E7D7": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D7%2Do %2D %2D A0T3J4 %2D ESA%2DEA Heritage Resources Rpt Appendix A %2D Env Res Map 1%2D20k 014": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D01EE %2D Volume 4 %2D Environmental Assessment Report %2D Appendix A A0W9J9": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "20 ESA Appendix07 %2D A4F3C1": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D2q Vol II %2D ESA %2D Appendix I and II A0Y1V3": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A2T5W3 %2D Letter to NEB re Vantage Section 21 Application and ESA": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A1W4K9 %2D ESA Appendix G Interactions Tables": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A0J1A5 %2D Env. Assessment of Corral Creek Pipeline Crossing": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B1%2D10 %2D 01_1313340047_TCPL_CCP_ESA_FINAL_Sec1%2D4 %2D A3V4K8": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B2%2D7 %2D ESA Section 5 Baseline Part 4 %2D A1X1V1": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D3%2Dd %2D %2D A0T2G1 %2D ESA%2DEA Env site Assessments Report 4, figure 3": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D9%2Dz %2D %2DA0T3U8 %2D ESA%2DEA Tech Rpts Wildlife and Wildlife Habitat Appendix A Env Res Maps 1%2D20k 19": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B36%2D5 %2D ESA_Update_September_30th_App_B_Part_32 %2D A2D7W3 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "D%2D02 %2D Environmental Assessment": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A1A0G0 %2D Appendix 5 Figure 4.3%2D15": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "13 ESA Appendix03_Part3of4 %2D A4F3A4": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B8%2D15 %2D Consolidated Errata List %2D ESA %2D A3V1U2": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A1W4K4 %2D ESA Appendix D N4 Loop Vegetation": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D2o %2D KXL ESA %2D Section 10 Part 11 of 15 %2D A1I9V4": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A1U0E0 %2D Transmittal Letter": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A3J0J1 %2D ESA %2D Main Figures 3and4": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D9%2D g %2D %2D A0T3S9 %2D ESA%2DEA Tech Rpts Wildlife and Wildlife Habitat Appendix A Env Res Maps 1%2D20k 00 LEGEND": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A0T4H5 %2D Environmental Assessment": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B3%2D17 %2D Appendix C Soil_Vegetation and Wetlands Baseline Figures C87%2D90 Part 15 %2D A1X1Y4": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B18%2D26 %2D Supplemental ESA %2D Appendix 9d %2D Environmental Alignment Sheet Package %2D A3L5D1": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D3w %2D Alignment Sheet %2D Alberta 23  %2D A0X2T0": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D02%2D2 %2D NGTL Horn River Project %2D ESA Project Description %2D A1R8C9 ": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A0R0Z4 %2D Environmental and Socio%2DEconomic Assessment": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A0R8X8 %2D Stittsville ESA %2D Appendix B (List of Contacts)": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B5%2D16 %2D V5A_ESA_08of16_BIOPHYSICAL %2D A3S1Q4": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B35%2D23 %2D ESA_Update_September_30th_App_A_Part_2 %2D A2D7S0 ": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "A87033%2D22 ESA_App_B%2D1_AQ_Tech_CS2_Part5_of_5 %2D A5V8F2": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A2U8L7 %2D Appendix F %2D Alignment Sheets %2D 2 of 2": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D9%2Dm %2D %2DA0T3T5 %2D ESA%2DEA Tech Rpts Wildlife and Wildlife Habitat Appendix A Env Res Maps 1%2D20k 06": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B3%2D10 %2D Appendix 06 %2D ESA Appendix 12 %2D Decommissioning Environmental Technical Report Part 01 of 14 %2D A4E7E0": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A0R6L9 %2D ESA Appendicies E and F": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A1G0H6 %2D ESA Appendix D Part 1 (Archaeology)": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D5%2Daa %2D %2D A0T3E8 %2D ESA%2DEA Tech Rpts Soils Appendix G Env Res Maps SOILS 1%2D20k 22": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A83558%2D1 Lodgepole Interconnect_Revised Engineering Assessment %2D A5L7C4": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B35%2D7 %2D ESA_Update_September_30th_Soils_Section_3(b) %2D A2D7Q4 ": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "B2%2D08_ESA_Main_Sec_1_to_5_Part8of12 %2D A4K2R3": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D2r Vol II %2D ESA %2D Appendix III A0Y1V4": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A1C0S4 %2D 9 Volume II ESA Part 1": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A72401%2D31 V4 19 ESA Appendix F%2DPart 5 of 5 %2D A4T1C1": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A1Y7Y8 %2D ESA Report Appendix D Part 1 %2D Previous Reports": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B2%2D22 %2D Volume IIA %2D ESA %2D Appendix 5C %2D Strome Station Environmental Noise Impact Assessment %2D A3E2Z7": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "B2%2D26  ESA_Appendix_M%2DN_Part1of2 (A3Q6I2)": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "A1W4J7 %2D ESA Appendix A EPP Alignment Sheets": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A3F6W3 %2D Line 3 Replacement Project ESA %2D Part 6 of 16": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D11w %2D Alignment Sheet %2D Manitoba 04 (A0Y0T3 )": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D2x %2D KXL ESA %2D Section 12 Part 3 of 3 %2D A1I9W3": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "Appendix 7 %2D Evaluation of Identified Environmental and Socio%2DEconomoic Elements %2D A3V7H6": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A0K7S5 %2D ESA Appendix 4a": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1X7Q5 %2D ESA %2D Part 2 of 4": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A74787%2D2 V2 %2D ESA_Amendment_Appendix_A %2D A4W7Y2": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A0X4F2 %2D Environmental Assessment": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D2ii %2D KXL ESA %2D Appendix A Part 3 of 14 %2D A1I9X4": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A87033%2D21 ESA_App_B%2D1_AQ_Tech_CS2_Part4_of_5 %2D A5V8F1": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A80172%2D10 Section 4 %2D ESA %2D AppB1 %2D Fish 2of2 %2D A5G2X4": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B5%2D12 %2D V5A_ESA_04of16_BIOPHYSICAL %2D A3S1L6": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B5%2D22 %2D V5A_ESA_14of16_BIOPHYSICAL %2D A3S1R1": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D02%2D25 %2D NGTL Horn River Project %2D ESA Appendix 4 Wildlife Report Part 1 of 3 %2D A1R8F2 ": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A75795%2D20 Appendix S %2D ESA Part 9 %2D A4Y5F5": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A90753%2D8 Blue Jay Receipt MS Phase 1 ESA %2D Final %2D A6C4V9": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D02%2D11 %2D NGTL Horn River Project %2D ESA Appendix 1 Aquatic Report Part 1 of 5 %2D A1R8D8 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D3nn %2D Alignment Sheet %2D Alberta 40  %2D A0X2U7": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D1AN  %2D ESA %2D NWML_KomieExt_20B_Alignment Sheets_2_of_2  %2D A2F4Q7": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "B8%2D29 %2D North_Montney_ESA_Sec_21 REVISED %2D A3V1V6": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A74508%2D12 Appendix 6.1 %2D ESA Part 10 of 10 %2D A4W2U7": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "A72401%2D14 V4 02 ESA Appendix B%2DEAS Index to Sheet 4%2DPart 1 of 6 %2D A4T0Z4": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "B%2D1m %2D  ESA Appendix E Wildlife Habitat Assessment (A1D5S3)": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D5%2Dx %2D %2D A0T3E5 %2D ESA%2DEA Tech Rpts Soils Appendix G Env Res Maps SOILS 1%2D20k 019": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B1%2D22 %2D 13_1313340047_TCPL_CCP_ESA_FINAL_AppD_Part3 %2D A3V4Q0": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "Attachment %2D ESA %2D 2 of 11 %2D A3V4F9": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "03_ESA_FINAL_Appendix01 %2D A4C2U1": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B3%2D13 %2D Appendix C Soil_Vegetation and Wetlands Baseline Figures C64%2D69 Part 11 %2D A1X1Y0": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B36%2D16 %2D ESA_Update_September_30th_App_C_Part_5 %2D A2D7X4 ": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A3F4K3 %2D SET_ESA_Part1_Sections1to10": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A3H4V7 %2D Attachment 8A %2D ESA Part 2 of 2": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A83276%2D1 SanLing response to Information Request No 2 %2D A5L3W2": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B3%2D30 %2D Appendix O Heritage Resources Permits and Photographic Plates %2D A1X1Z7": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D2j Vol II %2D ESA %2D Section 5 (Part 6) %2D ESE Setting A0Y1U6": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A78657%2D2 Ruger Phase I Environmental Assessment %2D A5E0T9": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B36%2D7 %2D ESA_Update_September_30th_App_B_Part_34 %2D A2D7W5 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D2nn %2D KXL ESA %2D Appendix A Part 8 of 14 %2D A1I9X9": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B35%2D39 %2D ESA_Update_September_30th_App_B_Part_16 %2D A2D7T6 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A79406%2D8 Updated ESA Reroute %2D A5F0W7": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D1h  %2D Groundbirch ESA_NEB_5of14 (A1J6I7)": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D1%2Dii %2D ESA %2D EPP 32 pages %2D Volume II %2D Part 3 %2D Appendix XI to ESA %2D ACCE Application %2DA0X6C1 ": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D2c %2D KXL ESA %2D Section 8 %2D A1I9U2": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "B%2D7%2Dy %2D %2D A0T3K4 %2D ESA%2DEA Heritage Resources Rpt Appendix A %2D Env Res Map 1%2D20k 24": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A90753%2D14 Kaybob South Lateral Phase 1 ESA %2D Final %2D A6C4W5": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B36%2D2 %2D ESA_Update_September_30th_App_B_Part_29 %2D A2D7W0 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A3E4T2 %2D ESA Appendix H %2D AIA Sections 4%2D7": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B2%2D2 %2D Volume II %2D ESA %2D Section 1 %2D Introduction  %2D Prt 1 of 2 %2D A3E2X7": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D2s %2D KXL ESA %2D Section 10 Part 15 of 15 %2D A1I9V8 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B3%2D22 %2D Appendix H Wetland Data Summary Tables %2D A1X1Y9": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A0R4C4 %2D Sec 6 SectionO PortKells ESA_rep": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D1n %2D  ESA Appendix F Arch Part 1 of 2 %2D Archaeological Impact Assessment (A1D5S4)": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A87033%2D24 ESA_App_B%2D2_AQ_Tech_CSN5_Part3_of_3 %2D A5V8F4": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A74508%2D8 Appendix 6.1 %2D ESA Part 6 of 10 %2D A4W2T6": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A3F8D0 %2D ESA Appendicies Part 10 of 10": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "A1X7R3 %2D ESA %2D Appendix 6 %2D Wildlife Part 1 of 2": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A2J1A9 %2D Talisman Energy Compass Pipeline Site Specific Pipeline Abandonment Liability Assessment November 2011": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D2J Volume II %2D ESA %2D Section 5 %2D ESE Setting (Part6) (A0Z0Z5)": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A1T3C7 %2D Environmental Assessment": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A0U4D2 %2D NEB %2D Section 58 Application %2D Section 9 ESA Part 9": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B1%2D31 %2D 22_1313340047_TCPL_CCP_ESA_FINAL_AppD_Part12 %2D A3V4Q9": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B35%2D31 %2D ESA_Update_September_30th_App_B_Part_8 %2D A2D7S8 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A3E4S8 %2D ESA Appendix D %2D Veg and Wetland": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "B%2D5%2Da %2D %2D A0T3C2 %2D ESA%2DEA Tech Reports Soils Rpt 1 of 2": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "B%2D5%2Du %2D %2DA0T3E2 %2D ESA%2DEA Tech Rpts Soils Appendix G Env Res Maps SOILS 1%2D20k 016": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D02%2D44 %2D NGTL Horn River Project %2D ESA Appendix 8 EPP Part 2 of 2 %2D A1R8H1 ": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A1I8W7 %2D ESA %2D Line 3 Conversion Project": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "Attachment %2D ESA %2D 11 of 11 %2D A3V4G7": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D18c %2D Updated Supplemental ESA %2D part 3 of 3 A1G7L1": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A87919%2D9 John Lake Pipeline Abandonment %2D Phase 1 ESA Final %2D A5X1R5": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A1H5J7 %2D Environmental Assessment Supporting the Revised Pump Station Environmental Protection Plan %2D Alberta Clipper Project": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B2%2D10 %2D Vantage Pipeline Project Vol II ESA Section 7(b) %2D A1X5X5": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "A1A0F2 %2D Appendix 5 Figure 4.2%2D5": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "B%2D5%2Dbb %2D %2D A0T3E9 %2D ESA%2DEA Tech Rpts Soils Appendix G Env Res Maps SOILS 1%2D20k 23": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A0R3W3 %2D SEACOR App A  Phase I ESA %2D Chip Site Loc Plan": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "A0R8X6 %2D Stittsville ESA %2D Appendix A (Aerial Mosaics) %2D Part 2": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D7%2Dp %2D %2D A0T3J5 %2D ESA%2DEA Heritage Resources Rpt Appendix A %2D Env Res Map 1%2D20k 015": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D2j %2D Redwillow ESA Section 6 Part 1 %2D A1C3W4 ": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A1J4Z6 %2D ESA Appendix D %2D AIA 1 of 8": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A74788%2D1 V2 %2D ESA_Amendment_Appendix_D_Part18 %2D A4W8A3": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A1U7A7 %2D 28 %2D ESA_REV1_Aug_2010_Part_7_of_23": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A1A0F3 %2D Appendix 5 Figure 4.3%2D1": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A81524%2D27 ESA%2D Part 1 %2D A5I4X1": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A75795%2D18 Appendix Q %2D ESA Part 7 %2D A4Y5F3": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A3I8G0 %2D Attachment 11 %2D ESA %2D Part 2 of 4": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A96812%2D14 Appendix 7%2D1 ESA Supplemental Part 3 of 3 %2D A6Q2Y7": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A81160%2D11 7178_eicbf2_am_015_pays_151026 %2D A5H8J5": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A74787%2D6 V2 %2D ESA_Amendment_Appendix_D_Part2 %2D A4W7Y6": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A87033%2D29 ESA_App_D_Soil_Part2_of_2 %2D A5V8F9": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "18 ESA Appendix06_Part1of2 %2D A4F3A9": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A74787%2D11 V2 %2D ESA_Amendment_Appendix_D_Part7 %2D A4W7Z1": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A0W7H9 %2D Draft Scope of Environmental Assesment": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A3E4S7 %2D ESA Appendix C %2D Noise": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "B%2D6%2Dw %2D %2D A0T3H4 %2D ESA%2DEA Tech Reports %2D Vegetation Env Res Maps 1%2D20k 20": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B35%2D38 %2D ESA_Update_September_30th_App_B_Part_15 %2D A2D7T5 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A80172%2D9 Section 4 %2D ESA %2D AppB1 %2D Fish 1of2 %2D A5G2X3": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "1402138_TCPL_SLL_ESA_APPENDIX_D_Part2_FINAL %2D A4J6E7": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A69344%2D1 01_ESA_Summary_of_Supplemental_Reporting %2D A4K2Q4": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A74787%2D13 V2 %2D ESA_Amendment_Appendix_D_Part9 %2D A4W7Z3": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A1A0F6 %2D Appendix 5 Figure 4.3%2D11": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A81755%2D8 Appendix 3 %2D ESA Socio%2DEc Checklist %2D A5I8I6": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A99706%2D1 2019%2DJAN %2D 2018 Phase 1 Environmental Site Assessment %2D Esther%2DCourt Pipeline RoW %2D A6U8X8": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A3K1F1 %2D Supplemental Environmental Filing %2D Part1 of 7": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B5%2D11 %2D V5A_ESA_03of16_BIOPHYSICAL %2D A3S1L5": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "A1U7D6 %2D 44 %2D ESA_REV1_Aug_2010_Part_23_of_23": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D5%2Dr %2D %2D A0T3D9 %2D ESA%2DEA Tech Rpts Soils Appendix G Env Res Maps SOILS 1%2D20k 013": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A87481%2D2 Coleman Phase 1 ESA Final %2D A5W5C4": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A0Z4V3 %2D Section 45 Environmental Assessment": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D2d %2D Route Selection A0X2I3 ": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A3F0G5 %2D Attachment 7b%2DESA Appendices Part 3 of 3": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B2%2D18_ESA_Appendix_1A_Boundary_EPP_Part1of1 %2D A4K2S3": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A1H1R3 %2D ESA %2D Part 3 of 3": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A63951%2D8 V4 %2D ESA_Appendix C_EASheets %2D A4D9I3": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A81457%2D2 Marsden Salt Water Pipeline Abandonment %2D Phase 1 ESA Report (AB) %2D A5I3U6": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D2tt %2D KXL ESA %2D Appendix A Part 14 of 14 %2D A1I9Y5 ": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A73674%2D14 Section_5%2DESA%2DAppB%2DFisheries%2D1of2 %2D A4V0Q5": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "B2%2D10 %2D ESA Section 5 Baseline Part 7 %2D A1X1V4": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B3%2D16 %2D Appendix 06 %2D ESA Appendix 12 %2D Decommissioning Environmental Technical Report Part 07 of 14 %2D A4E7E6": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1U7C3 %2D 34 %2D ESA_REV1_Aug_2010_Part_13_of_23": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1C0S5 %2D 10 Volume II ESA Part 2": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D2i %2D Redwillow ESA Section 5 Part 4 %2D A1C3W3 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B35%2D36 %2D ESA_Update_September_30th_App_B_Part_13 %2D A2D7T3 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D1V  %2D ESA %2D NWML_KomieExt_01_of_17  %2D A2F4K9": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "Attachment %2D ESA Appendix %2D 1 of 2 %2D A3V4G8": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A79036%2D14 14 Peace River Mainline Abandonment %2D Appendix 9 %2D ESA Attachment B ESIS 10 of 11 %2D A5E6A5": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A0R3A5 %2D Environmental and Socio%2DEconomic Assessment": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D4g %2D Alignment Sheet %2D Manitoba 07  %2D A0X2L4": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B1%2D24 %2D ESA Appendix E Part 2 of 2 %2D A2A6R0": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D7%2Dr %2D %2D A0T3J7 %2D ESA%2DEA Heritage Resources Rpt Appendix A %2D Env Res Map 1%2D20k 017": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A0L5S2 %2D ESA Part 1A": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D1i %2D Groundbirch ESA_NEB_6of14 (A1J6I8 )": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "A3D8J8 %2D ESA Appendix II Figures 16%2D25": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A1Z9F1 %2D Cheecham %2D Kettle River Area Expansion %2D Sec 58 ESA Section 4 June 2011": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D2DD Volume III %2D ESA %2D Align Sheets (Part 13) (A0Z1C5)": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A80172%2D14 Section 4 %2D ESA %2D AppB4 %2D Wildlife 1of2 %2D A5G2X8": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A72401%2D24 V4 12 ESA Appendix E%2DPart 2 of 4 %2D A4T1A4": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A82979%2D1 Letter to NEB re Enbridge Response to NEB IR No. 1 %2D Supplemental ESA %2D 3 %2D A5K9J5": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A92793%2D3 2018%2D06%2D14 Windmill_NEB Deactivation_FINAL %2D A6F6X3": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D2F Brunswick Pipeline SJ River EA_Part 5 of 5 (A1C4W5)": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "Section_5%2DESA%2DAppB%2DSoils%2D3of3 %2D A4U3X2": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "B3%2D6 %2D Vol 6A P2 %2D Pipelines and Tank Terminal ESA (Part 1 of 6) %2D A1T0F6 ": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "A96967%2D21 Attachment 2.4_ESA_FigA%2D2_Natural_Heritage_Features (2) %2D A6Q5A9": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "B6%2D02 %2D Appendix 06 %2D ESA Appendix 3A %2D Pipeline Soil Survey Part 2 of 2 %2D A4E6Z5": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A1C4E5 %2D Appendix D ESA Sec 4.0 pp 55%2D87": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "B2%2D32 %2D Volume IIA %2D ESA %2D Appendix 9 %2D Wildlife Report %2D A3E3A7": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B3%2D30_ESA_Appendix_3A_Soil_Survey_Bear_Canyon_Part1of1 %2D A4K2T6": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A74787%2D7 V2 %2D ESA_Amendment_Appendix_D_Part3 %2D A4W7Y7": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "B2%2D25 %2D Vantage Pipeline Project Vol II ESA Section 19 and 20 %2D A1X5Z0": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A2T6Y7 %2D Attachment 10a %2D ESA": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A81524%2D31 ESA%2D Appendix A%2D Environmental Protection Plan %2D A5I4X5": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A79036%2D4 04 Peace River Mainline Abandonment %2D Appendix 9 %2D ESA Attachment A EPP Abandonment %2D A5E5Z5": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B2%2D15 %2D Volume II %2D ESA %2D Appendix 2 %2D Environmental Alignment Sheet Package %2D Map 46 to 55  %2D Pt 6 of 8 %2D A3E2Z0": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B1%2D17 %2D 08_1313340047_TCPL_CCP_ESA_FINAL_AppB_Part3 %2D A3V4L5": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "A88364%2D1 TQM %2D Qu%C3%A9bec Mainline (NPS 24 1982) Engineering Assessment %2D A5X8L6": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D2i %2D Noise  A0X2I8 ": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "A72401%2D32 V4 20 ESA Appendix G%2DPart 1 of 4 %2D A4T1C2": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A2T6Y8 %2D Attachment 10b %2D ESA Appendices A and B": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A0K8L8 %2D Archaeological Assessment": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B6%2D09 %2D Appendix 06 %2D ESA Appendix 5 %2D GHG Assessment %2D A4E7A2": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B3%2D32 %2D Vol 8B %2D Marine Transportation ESA (Part 7 of 11) %2D A1T0I2 ": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "B%2D3ff %2D Alignment Sheet %2D Alberta 32  %2D A0X2T9": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A2I0L1 %2D ESA Appendix 4 Aquatic Report": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D27B Further Updates to ESA %2D October 2007 re Alberta Clipper Project (A1A9F4)": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D3oo %2D Alignment Sheet %2D Alberta 41  %2D%2D A0X2U8": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B8%2D17 %2D North_Montney_ESA_Sec 5 REVISED %2D A3V1U4": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B6%2D26 %2D Appendix 06 %2D ESA Appendix 8 %2D Wetland Technical Report Part 7 of 7 %2D A4E7C9": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A3D6L9 %2D Draft Environmental Assessment Report to NOVA Gas Transmission Ltd. Northwest Mainline Komie North Extension Project GH%2D001%2D2012": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A0L8A0 %2D ESA %2D Appendix 3 %2D Issues Mitigative Measures Residual Effects": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A0R1H2 %2D Environmental Assessment": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D2W Volume III %2D ESA %2D Align Sheets (Part 6) (A0Z1A8)": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D9%2D c %2D %2D A0T3S5 %2D ESA%2DEA Wildlife and Wildlife Habitat Report Part 3 of 3": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A0R4C3 %2D Sec 6 SectionN Wahleach ESA_rep": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A1U9L5 %2D ESA Phase 1 %2D Appendix 1 (Part 2)": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B2%2D1 %2D Volume II %2D Environmental and Socio%2DEconomic Assessment Executive Summary and Table of Contents %2D A1X1U5": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A0T7K4 %2D Stns 134 and 1703 ESA %2D Main Report": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A1S7W7 %2D ESA Appendix 4": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "1402138_TCPL_SLL_ESA_APPENDIX_B_Part1_FINAL %2D A4J6E3": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "B36%2D11 %2D ESA_Update_September_30th_App_B_Part_38 %2D A2D7W9 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A3K3G0 %2D CE2_Enbridge_ESA_Appendix8": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B6%2D16 %2D Appendix 06 %2D ESA Appendix 7 %2D Aquatics Technical Report Part 4 of 7 %2D A4E7A9": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B2%2D24  ESA_Appendix_L_Part2of3 (A3Q6I0)": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A3F8C3 %2D ESA Appendicies Part 3 of 10": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A96233%2D9 Attachment NEB 3.1%2D3 McLeod_ESA_Part 6 %2D A6L2C8": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "A0L5T0 %2D ESA Part 4D": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "Section_5%2DESA%2DAppD%2DInteraction_Table %2D A4U3X8": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D14l %2D Supplemental ESA 9 of 17 A1G4Q4": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D3%2Df %2D %2D A0T2G3 %2D ESA%2DEA Fish and Fish Habitat Report": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A0K7S7 %2D ESA Appendix  5": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D9%2Dr %2D %2D A0T3U0 %2D ESA%2DEA Tech Rpts Wildlife and Wildlife Habitat Appendix A Env Res Maps 1%2D20k 11": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D4%2Dr %2D %2D A0T2L4 %2D ESA%2DEA Geotechnical Rpts Appendix A Maps ERM TERRAIN 1%2D20k 12 ": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A84709%2D2 2017.06.29_OM_KP19.99_Phase II_EA_OM2017%2D066_9 June 2017 vrsn %2D A5R8V2": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "Attach 11%2D2 Part1of3_Goodfish_NEBs58_ESA_20141216 %2D A4G2A1": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "B1%2D20 %2D Appendix 10 %2D Environmental and Socio%2DEconomic Assessment (ESA) A1T0Y7": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D9%2Dx %2D %2D A0T3U6 %2D ESA%2DEA Tech Rpts Wildlife and Wildlife Habitat Appendix A Env Res Maps 1%2D20k 17": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A0K4V4 %2D Environmental and Socio%2DEconomic Assessment": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "07 ESA MAIN Section08to11 %2D A4F2Z8": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D6%2Dp %2D %2D A0T3G7 %2D ESA%2DEA Tech Reports %2D Vegetation Env Res Maps 1%2D20k 13": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "Attach 11 %2D ESA %2D APPENDIX_B_to_E %2D A3X5F2": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A2A7E5 %2D Environmental Assessment": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1X5H4 %2D ESA Appendix 6": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A74788%2D2 V2 %2D ESA_Amendment_Appendix_D_Part19 %2D A4W8A4": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A74788%2D7 V2 %2D ESA_Amendment_Appendix_D_Part24 %2D A4W8A9": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A74788%2D16 V2 %2D ESA_Amendment_Appendix_D_Part33 %2D A4W8D1": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A1R2D2 %2D Appendix 6 %E2%80%93 ESA Part 2A of 9 sections 4": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A78970%2D3 Supplemental ESA %2D Part 2 of 3 %2D A5E4Z3": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A98641%2D19 NCE_ESA_Appendices10to12 %2D A6T2W6": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A0T7K6 %2D Stns 134 and 1703 ESA %2D Appendix B %2D Stn 134 Air Quality": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B%2D02%2D33 %2D NGTL Horn River Project %2D ESA Appendix 6 TLU Report Part 3 of 11 %2D A1R8G0 ": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B2%2D19 %2D Volume IIA %2D ESA %2D Appendix 4 %2D GHG Assessment %2D A3E2Z4": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B%2D2v Vol III %2D ESA %2D Part 3 A0Y1V8": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1U9L4 %2D ESA Phase 1 %2D Appendix 1 (Part 1)": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B35%2D47 %2D ESA_Update_September_30th_App_B_Part_24 %2D A2D7U4 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D16f  %2D ESA %2D Section 11 %2D Page 11%2D44  (A0Y0X4)": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "A3F8C7 %2D ESA Appendicies Part 7 of 10": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A2A0E0 %2D Harvest Gething ESA Part 2": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A1U7D1 %2D 39 %2D ESA_REV1_Aug_2010_Part_18_of_23": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1K0D3 %2D Albright North Crossover %2D 5680 ESA Part 3 of 4": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A79036%2D3 03 Peace River Mainline Abandonment %2D Appendix 9 %2D ESA 2 of 2 %2D A5E5Z4": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A3E0S9 %2D Line 2 Replacement ESA %2D 21 of 21": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B%2D02%2D16 %2D NGTL Horn River Project %2D ESA Appendix 2 Wetland Report Part 1 of 4 %2D A1R8E3 ": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D01Y2 %2D Volume 4 %2D Environmenal Assessment Report %2D Biophysical Assessment A0W9J3": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "B%2D8%2Dz %2D %2DA0T3R6 %2D ESA%2DEA Wetlands Rpts Appendix G %2D Wetland Fish Habitat Env Res Map 1%2D20k 019": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1W4J1 %2D ESA Main Sections 6.1 %2D 6.3": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A74508%2D6 Appendix 6.1 %2D ESA Part 4 of 10 %2D A4W2S8": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A1U7C0 %2D 31 %2D ESA_REV1_Aug_2010_Part_10_of_23": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A81524%2D30 ESA%2D Part 4 %2D A5I4X4": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A89944%2D16 Section 10%2DAppendix 10%2D2%2DESA Part 7_Appendix_f %2D A6A2D4": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B18%2D1%2D Cover Letter %2D Revised ESA %2D A3L4Z6 ": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A1S1X6 %2D Kearl_ESA_Appendix5_HistoricalResources_Mar10_Part 1": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B6%2D15 %2D Appendix 06 %2D ESA Appendix 7 %2D Aquatics Technical Report Part 3 of 7 %2D A4E7A8": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B36%2D14 %2D ESA_Update_September_30th_App_C_Part_3 %2D A2D7X2 ": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A1A0E9 %2D Appendix 5 Figure 4.2%2D2": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A92619%2D16 16 ESA Appendix A EPP %2D A6F4Q9": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A3A3J7 %2D Env Assess pipeline copy": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B3%2D1 %2D Appendix A to ESA Contiguous vs Noncontiguous Portions of Bakken Pipeline ROW %2D A1X1W8": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B6%2D03 %2D Appendix 06 %2D ESA Appendix 3B %2D Facility Soil Survey Part 1 of 2 %2D A4E6Z6": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "B%2D2p Vol II %2D ESA %2D Section 10 %2D Conclusion A0Y1V2": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A94166%2D1 TWN%2DAssessment%2DExec Summary  %2D A6H7V0": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "A94156%2D3 2021 NGTL SXP %2D ESA Update %2D Appendix A %2D Updated EPP %2D A6H7R7": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D3h %2D Alignment Sheet %2D Alberta 08 %2D  A0X2R5 ": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D9%2Daa %2D %2D A0T3U9 %2D ESA%2DEA Tech Rpts Wildlife and Wildlife Habitat Appendix A Env Res Maps 1%2D20k 20": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1J4Y7 %2D ESA Appendix A %2D Winter Fish Study": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D3kk %2D Alignment Sheet %2D Alberta 37  %2D A0X2U4": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A0T7K8 %2D Stns 134 and 1703 ESA %2D Appendix D %2D Stn 134 Noise": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "A1G9Y5 %2D ESA %2D Plains Line 4 Direct Connect at Kerrobert": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A0L7Z5 %2D Environmental and Socio%2DEconomic Assessment": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D2n %2D Redwillow ESA Section 8 %2D A1C3W8": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B1%2D35 %2D 26_1313340047_TCPL_CCP_ESA_FINAL_AppE_Part3 %2D A3V4R3": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A90753%2D7 Big Bend East Receipt MS Phase 1 ESA %2D Final %2D A6C4V8": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B3%2D15 %2D Appendix C Soil_Vegetation and Wetlands Baseline Figures C76%2D81 Part 13 %2D A1X1Y2": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B1%2D36 Appendix 10%2D2_TCPL_KNC_ESA_Appendix E %2D 1 %2D A4A2L7": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B35%2D13 %2D ESA_Update_September_30th_Vegetation_Section_8(a) %2D A2D7R0 ": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D3r %2D Alignment Sheet %2D Alberta 18  %2D A0X2S5": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A0W5F8 %2D ESA Appendix A%2D Construction Plan and Location Map": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "A3E0S0 %2D Line 2 Replacement ESA %2D 12 of 21": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A1A0F9 %2D Appendix 5 Figure 4.3%2D14": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A96812%2D13 Appendix 7%2D1 ESA Supplemental Part 2 of 3 %2D A6Q2Y6": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A81160%2D42 EIS_QcNH%2DA_Summary_160919 %2D A5H8R0": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A75795%2D19 Appendix R %2D ESA Part 8 %2D A4Y5F4": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "ExternalPaperOnly_e (6)": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A74854%2D1 Letter to NEB re Update to ESA for Line 10 Westover Segment Replacement Project %2D A4X1G8": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A74788%2D10 V2 %2D ESA_Amendment_Appendix_D_Part27 %2D A4W8C2": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "B36%2D18 %2D ESA_Update_September_30th_App_C_Part_7 %2D A2D7X6 ": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B%2D6%2Dp %2D %2DA0T3D7 %2D ESA%2DEA Tech Rpts Soils Appendix G Env Res Maps SOILS 1%2D20k 011": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B5%2D02 %2D Appendix 06 %2D ESA Part 02 of 10 %2D A4E6W2": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B3%2D41_ESA_Appendix_7_Wetlands_TDR_Part1of2 %2D A4K2V4": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B35%2D37 %2D ESA_Update_September_30th_App_B_Part_14 %2D A2D7T4 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A74792%2D9 V3 %2D ESA_Amendment_Appendix_C_Part9 %2D A4W8L3": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "B%2D01S %2D Volume 4 %2D Environmental Assessment Report %2D Introduction A0W9I7": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B3%2D09 %2D Appendix 06 %2D ESA Appendix 11 %2D Socio%2DEconomic Technical Report Part 2 of 2 %2D A4E7D9": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A94156%2D11 2021 NGTL SXP %2D ESA Update %2D Appendix I %2D TK Report %2D A6H7S5": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1Z5V8 %2D Cutbank%2DMusreau Area Expansion %2D ESA_Part 4 of 6": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D02%2D45 %2D NGTL Horn River Project %2D ESA Appendix 9 Align Sheets Part 1 of 3 %2D A1R8H2 ": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D4%2De %2D %2D A0T2K1 %2D ESA%2DEA Geotechnical Rpts Appendix A %2D Map ERM TERRAIN 1%2D20k 00 Legend pg 1": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D7%2Dv %2D %2D A0T3K1 %2D ESA%2DEA Heritage Resources Rpt Appendix A %2D Env Res Map 1%2D20k 21": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D11ff  %2D Alignment Sheet %2D Manitoba 13 (A0Y0U2 %2D)": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A0R4A2 %2D Sec 6 SectionC Chip ESA_rep": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D5%2Dk %2D %2D A0T3D2 %2D ESA%2DEA Tech Rpts Soils Appendix G Env Res Maps ERM SOILS 1%2D20k 06": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D9%2Df %2D %2DA0T3S8 %2D ESA%2DEA Tech Rpts Wildlife and Wildlife Habitat Appendix A Env Res Maps 1%2D20k 00 INDEX": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A81915%2D3 Supplemental Environmental and Socio%2DEconomic Assessment %2D 3 (Part 2 of 2) %2D A5J1Q3": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A96233%2D4 Attachment NEB 3.1%2D3 McLeod_ESA_Part 1 %2D A6L2C3": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A90753%2D10 Donatville Receipt MS Phase 1 ESA %2D Final %2D A6C4W1": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D02%2D1 %2D NGTL Horn River Project %2D ESA Introduction %2D A1R8C8 ": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A75795%2D12 Appendix K %2D ESA Part 1 %2D A4Y5E7": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A3F0G4 %2D Attachment 7b%2DESA Appendices Part 2 of 3": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D2h %2D KXL ESA %2D Section 10 Part 4 of 15 %2D A1I9U7": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A80172%2D8 Section 4 %2D ESA %2D AppA %2D EPP 3of3 %2D A5G2X2": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A87033%2D6 ESA_App_I%2DInteractions_Table %2D A5V8D6": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A73674%2D16 Section_5%2DESA%2DAppB%2DGHG %2D A4V0Q7": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B%2D3g %2D Alignment Sheet %2D Alberta 07  %2D A0X2R4 ": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "13_ESA_FINAL_Appendix07_pt2of2 %2D A4C2V1": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A99863%2D3 Attachment NEB 1.1%2D1 Groundbirch ESA Part 2 of 3 %2D Appendices 1%2D3 %2D A6V0Z3": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D11p  %2D Alignment Sheet %2D Alberta 30 (A0Y0S6)": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D2w %2D KXL ESA %2D Section 12 Part 2 of 3 %2D A1I9W2": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A0R4A7 %2D Sec 6 SectionH Kamloops ESA_rep": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B%2D6%2Dm %2D %2D A0T3G4 %2D ESA%2DEA Tech Reports %2D Vegetation Env Res Maps 1%2D20k 10": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B35%2D8 %2D ESA_Update_September_30th_Surface_Water_Section_4(a) %2D A2D7Q5 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A79036%2D2 02 Peace River Mainline Abandonment %2D Appendix 9 %2D ESA 1 of 2 %2D A5E5Z3": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A2A0E4 %2D Harvest Gething ESA Appendix 4": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A72401%2D20 V4 08 ESA Appendix C to Appendix D%2DPart 1 of 3 %2D A4T1A0": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B36%2D17 %2D ESA_Update_September_30th_App_C_Part_6 %2D A2D7X5 ": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B%2D02%2D13 %2D NGTL Horn River Project %2D ESA Appendix 1 Aquatic Report Part 3 of 5 %2D A1R8E0 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B3%2D31 %2D Appendix P Economic Effects of Bakken Pipeline Project Canada %2D A1X1Z8": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B2%2D20  Volume 6 %2D ESA_Appendix_H (A3Q6H6)": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D2X Volume III %2D ESA %2D Align Sheets (Part 7) (A0Z1A9)": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D1%2Dv %2D photos %2D Volume II %2D ESA %2D Photos %2D Plates %2D 7 %2D 14 A0X5Z8 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A2Y1X8 %2D Appendix 3%2D1 %2D PRML Decommissioning ESA August2012 2of5": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A0L7Z8 %2D ESA %2D Appendix 1 Part C %2D Figures": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B2%2D24 %2D Volume IIA %2D ESA %2D Appendix 6 %2D Aquatic Assessement %2D Appendix A and B Watercourse and Fish Bearing  Wetland Site Records %2D A3E2Z9": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A87033%2D9 ESA_App_G%2D1_Aitken_Loop%2DWildlife_Tech %2D A5V8D9": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A0S5I8 %2D ESA %2D Figure 9.4(d) Changes in Land Use 1992": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D2y %2D KXL ESA %2D Section 13 Part 1 of 3 %2D A1I9W4": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "B%2D8%2Dv %2D %2D A0T3R2 %2D ESA%2DEA Wetlands Rpts Appendix G %2D Wetland Fish Habitat Env Res Map 1%2D20k 015": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A0F4W0 %2D Environmental and Socio%2DEconomic Assessment and Mitigation Plan": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B3%2D15 %2D Appendix 06 %2D ESA Appendix 12 %2D Decommissioning Environmental Technical Report Part 06 of 14 %2D A4E7E5": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A79106%2D3 Eastern Mainline Project %2D ESA Update Report %2D Part 2 of 2 %2D A5E7A4": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "B2%2D15_ESA_Main_Sec_8_Part1of2 %2D A4K2S0": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B2%2D15  ESA_Appendix_F (A3Q6H1)": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A3K1F6 %2D Supplemental Environmental Filing %2D Part 6 of 7": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B2%2D34 %2D Volume IIA %2D ESA %2D Appendix 11 %2D Heritage Resources Act Clearance %2D A3E3A9": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B2%2D27 %2D Volume IIA %2D ESA %2D Appendix 7 %2D Wetland Evalution %2D App a %2D Health Function Site Cards Pt 1 %2D A3E3A2": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B18%2D6 %2D Supplemental ESA %2D Appendix 2a %2D Vegetation Survey %2D A3L5A1": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A1U7A3 %2D 23 %2D ESA_REV1_Aug_2010_Part_2_of_23": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A1C4E6 %2D Appendix D ESA Sec 5.0 %2D 10.0": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A74792%2D11 V3 %2D ESA_Amendment_Appendix_C_Part11 %2D A4W8L6": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "B%2D01BB %2D Volume 4 %2D Environmental Assessment Report %2D Conclusions A0W9J6": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B36%2D9 %2D ESA_Update_September_30th_App_B_Part_36 %2D A2D7W7 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A99863%2D2 Attachment NEB 1.1%2D1 Groundbirch ESA Part 1 of 3 %2D Section 1%2D11 %2D A6V0Z2": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A1U7A5 %2D 25 %2D ESA_REV1_Aug_2010_Part_4_of_23": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A0X4F6 %2D Environmental Assessment": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D14m %2D Supplemental ESA 10 of 17 A1G4Q5": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D2q %2D Fisheries Appendix 1    A0X2J6": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B2%2D27  ESA_Appendix_N_Part2of2 (A3Q6I3)": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D4L %2D Alignment Sheet %2D Manitoba 12  %2D A0X2L9": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D2y Vol III %2D ESA %2D Part 6 A0Y1W1": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D4m %2D Alignment Sheet %2D Manitoba 13  %2D A0X2Q0": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A1Z5V6 %2D Cutbank%2DMusreau Area Expansion %2D ESA_Part 2 of 6": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A0R1S4 %2D Correction to Environmental and Socio%2DEconomic Assessment": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D2ss %2D KXL ESA %2D Appendix A Part 13 of 14 %2D A1I9Y4": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B8%2D25 %2D North_Montney_ESA_Sec 13 REVISED %2D A3V1V2": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1D2R6 %2D Post Construction Audit %2D Condition 8 Of Board Order XG%2DM025%2D31%2D2005": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B2%2D13 %2D Vantage Pipeline Project Vol II ESA Section 10(b) %2D A1X5X8": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A90753%2D11 Elinor Lake East Receipt MS Phase 1 ESA %2D Final %2D A6C4W2": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A82128%2D1 LSD 10%2D23%2D038%2D01 W4M Phase 2 ESA Work Plan Amendment (600%2D221%2D02 WP02) %2D A5J5K4": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "1402138_TCPL_SLL_ESA_APPENDIX_C%2DD_Part1_FINAL %2D A4J6E6": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "Attachment 08_06_ESA_FINAL_Appendix02 %2D A3W5R0": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A3J1D9 %2D 04 ESA Update Part 3 (Sections 2.0 %2D 6.0 and Appendix 1 %2D Soil Survey)": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B35%2D43 %2D ESA_Update_September_30th_App_B_Part_20 %2D A2D7U0 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A81524%2D29 ESA%2D Part 3 %2D A5I4X3": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A2Y1Y1 %2D Appendix 3%2D1 %2D PRML Decommissioning ESA August2012 5of5": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D01U %2D Volume 4 %2D Environmental Assessment Report %2D Malfunctions and Accidental Events A0W9I9": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "B1%2D34 Appendix 10%2D2_TCPL_KNC_ESA_Appendix B %2D A4A2L5": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "B2%2D16 %2D ESA Section 5 Baseline Part 13 %2D A1X1W0": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A2K5D0 %2D ESA Mica Creek Pipeline Project Appendices 8, 9, 10, 11, 12": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B1%2D25 Appendix 10%2D1 _TCPL_KNC_ESA_Interactions Table %2D A4A2K6": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "19 ESA Appendix06_Part2of2 %2D A4F3C0": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B18%2D18 %2D Supplemental ESA %2D Appendix 6 %2D Battle River Crossing Details %2D A3L5C3": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B2%2D4   ESA_Main_Part_3_of_5 (A3Q6G0)": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A1U2X1 %2D Cutbank River Lateral Loop (Bald Mountain) ESA_rev1_part_5_of_13": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B1%2D29 %2D 20_1313340047_TCPL_CCP_ESA_FINAL_AppD_Part10 %2D A3V4Q7": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B3%2D21 %2D Appendix G Fish and Fish Habitat Assessment Detailed Methodology %2D ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A87033%2D8 ESA_App_H%2D2_Aitken_Loop_Interim_AIA %2D A5V8D8": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B2%2D20_ESA_Appendix_1C_McLeodRiver_EPP_Part1of1 %2D A4K2S5": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D7%2Dz %2D %2D A0T3K5 %2D ESA%2DEA Heritage Resources Rpt Appendix A %2D Env Res Map 1%2D20k 25": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B36%2D12 %2D ESA_Update_September_30th_App_C_Part_1 %2D A2D7X0 ": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B8%2D2  %2D Northern Gateway Volume 6C Section 4.4 %2D ESA %2D Regional Socio and Economic Effects (A1V5D2)": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A74787%2D19 V2 %2D ESA_Amendment_Appendix_D_Part15 %2D A4W7Z9": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "B2%2D2 %2D Vantage Pipeline Project Vol II ESA Section 1(a) %2D A1X5W7": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A1D7A6 %2D Environmental Assessment Track Report": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D11i  %2D Alignment Sheet %2D Alberta 22 (A0Y0R9 )": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D18b %2D Updated Supplemental ESA %2D part 2 of 3 A1G7L0": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A96967%2D18 Attachment 2.1_ESA_FigA%2D1_Project_Overview %2D A6Q5A6": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "B%2D3k %2D Alignment Sheet %2D Alberta 11 %2D A0X2R8": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A63951%2D34 V4 %2D ESA_Appendix J%2D4 %2D A4D9L2": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "B1%2D35 Appendix 10%2D2_TCPL_KNC_ESA_Appendix C and D %2D A4A2L6": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A1F3D3 %2D Cover Letter %2D Corrections to ESA": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "Attachment 13 %2D ESA Vol%2D2 %2D A3S6Q9": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A3F8C4 %2D ESA Appendicies Part 4 of 10": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A2S7S6 %2D MRPL Replacement ESA Appendix 5": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B%2D1n %2D Groundbirch ESA_NEB_11of14 (A1J6J3 )": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1Z9E9 %2D Cheecham %2D Kettle River Area Expansion %2D Sec 58 ESA Appendices June 2011 2 of 2": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A3I8I0 %2D Attachment 09E %2D ESA_AppC_1of2": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A75795%2D13 Appendix L %2D ESA Part 2 %2D A4Y5E8": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "B%2D8%2D i %2D %2D A0T3L9 %2D ESA%2DEA Wetlands Rpts Appendix G %2D Wetland Fish Habitat Env Res Map 1%2D20k 02": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D3y %2D Alignment Sheet %2D Alberta 25  %2D A0X2T2": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A0T7K5 %2D Stns 134 and 1703 ESA %2D Appendix A %2D Species at Risk": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D1g  %2D Groundbirch ESA_NEB_4of14 (A1J6I6)": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A3K1F7 %2D Supplemental Environmental Filing %2D Part 7 of 7": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A72401%2D21 V4 09 ESA Appendix D%2DPart 2 of 3 %2D A4T1A1": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "B2%2D18 %2D Vantage Pipeline Project Vol II ESA Section 15(b) %2D A1X5Y3": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A1G0H7 %2D ESA Appendix D Part 2 (Archaeology)": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A74787%2D17 V2 %2D ESA_Amendment_Appendix_D_Part13 %2D A4W7Z7": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A1R5X6 %2D Appendix 4 %E2%80%93 ESA A6 Environmental Protection Plan": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D16e %2D ESA %2D Section 5 %2D Pages 109%2D111 (A0Y0X3 )": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B2%2D10 %2D Volume II %2D ESA %2D Appendix 2 %2D Environmental Alignment Sheet Package %2D Map 1 to 7  %2D Pt 1 of 8 %2D A3E2Y5": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D6%2Dv %2D %2D A0T3H3 %2D ESA%2DEA Tech Reports %2D Vegetation Env Res Maps 1%2D20k 19": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A0L5T2 %2D ESA Part 5B": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B1%2D16 %2D 07_1313340047_TCPL_CCP_ESA_FINAL_AppB_Part2 %2D A3V4L4": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "B%2D11dd %2D Alignment Sheet %2D Manitoba 11 (A0Y0U0 )": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D3hh %2D Alignment Sheet %2D Alberta 34  %2D A0X2U1": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D2I Volume II %2D ESA %2D Section 5 %2D ESE Setting (Part5) (A0Z0Z4)": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B%2D8%2Dw %2D %2D A0T3R3 %2D ESA%2DEA Wetlands Rpts Appendix G %2D Wetland Fish Habitat Env Res Map 1%2D20k 016": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A74787%2D8 V2 %2D ESA_Amendment_Appendix_D_Part4 %2D A4W7Y8": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A94156%2D7 2021 NGTL SXP %2D ESA Update %2D Appendix E %2D Vegetation %2D A6H7S1": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B2%2D22  ESA_Appendix_K (A3Q6H8)": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A87486%2D1 Order ZO%2DN081%2D004%2D2017%2DCondition 5%2DPhase II ESA Plan %2D A5W5E4": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D14t %2D Supplemental ESA 17 of 17 A1G4R2": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1W4J0 %2D ESA Main Sections 1 %2D 5.8": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B5%2D01 %2D Appendix 06 %2D ESA Part 01 of 10 %2D A4E6W1": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D2v %2D KXL ESA %2D Section 12 Part 1 of 3 %2D A1I9W1": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A81583%2D8 Section 5 %2D ESA %2D Interactions Table %2D A5I5T4": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D9%2De %2D %2D A0T3S7 %2D ESA%2DEA Wildlife and Wildlife Habitat Report Appendices 2 of 2 ": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A2H7D2 %2D Section 9 %2D ESA_Appendix 2_Bird Species": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A3K3F4 %2D CE2_Enbridge_ESA_Appendix1to3": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D1AC  %2D ESA %2D NWML_KomieExt_08_of_17  %2D A2F4L6": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A2T5X3 %2D Laurier ReRoute ESA %2D Part 1": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "Appendix 5 %2D ESA %2D Appendices 3 to 6 %2D A3R5E5": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B5%2D25 %2D Appendix 06 %2D ESA Appendix 2 %2D Environmental Alignment Sheet Package Part 11 of 18 %2D A4E6Y5": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A43137%2D3  NEB %2D Decision %2D Enbridge %2D Environmental Assessment Report  Appendix I %2D OH%2D005%2D2011": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A1K4L0 %2D APPENDIX 7 %2D ESA Part 3": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D1s  %2D ESA Appendix H Alignment Sheets Part 3 of 3 %2D Sheets 18 and 19 (A1D5S9)": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A73674%2D20 Section_5%2DESA%2DAppB%2DSoil%2D4of7 %2D A4V0R1": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "B1%2D14 %2D 05_1313340047_TCPL_CCP_ESA_FINAL_AppA %2D A3V4L2": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D6%2Dl %2D %2D A0T3G3 %2D ESA%2DEA Tech Reports %2D Vegetation Env Res Maps 1%2D20k 09": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "16_ESA_FINAL_Appendix10 %2D A4C2V4": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A2K5D1 %2D ESA Mica Creek Pipeline Project Appendices 1, 2, 3": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D6%2Db %2D %2D A0T3F3 %2D ESA%2DEA Tech Reports %2D Vegetation  Env Res Maps 1%2D20k 00 Index Rev0": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D8%2Ddd %2D %2D A0T3S0 %2D ESA%2DEA Wetlands Rpts Appendix G %2D Wetland Fish Habitat Env Res Map 1%2D20k 023": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D8%2Dee %2D %2D A0T3S1 %2D ESA%2DEA Wetlands Rpts Appendix G %2D Wetland Fish Habitat Env Res Map 1%2D20k 24": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A0U4C8 %2D NEB %2D Section 58 Application %2D Section 9 ESA Part 5": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1W4L4 %2D ESA Appendix I SLP TLU": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B2%2D06_ESA_Main_Sec_1_to_5_Part6of12 %2D A4K2R1": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A87033%2D5 ESA_App_B%2D2_AQ_Tech_CSN5_Part2_of_3 %2D A5V8D5": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B%2D10b %2D ESA Appendix 7K %2D Alternate Soil Handling for Groundwater in MB (A0Y0V1)": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "B2%2D8  ESA_Appendix_C (A3Q6G4)": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A1R2C6 %2D Appendix 6 %E2%80%93 ESA Part 4 of 9 Appendix A": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A1G0H5 %2D ESA Appendix C (Wildlife)": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B18%2D13 %2D Supplemental ESA %2D Appendix 4e %2D Wetlands Evaluation %2D A3L5A8": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A0R1Y3 %2D Archaeological Assessment": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A86255%2D9 Appendix I %2D Xterra ESA Report %2D Chinook%2DLoomis Abandonment %2D A5U4H9": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A3E0R0 %2D Line 2 Replacement ESA %2D 2 of 21": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D6%2Dy %2D %2D A0T3H6 %2D ESA%2DEA Tech Reports %2D Vegetation Env Res Maps 1%2D20k 22": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A3I8I2 %2D Attachment 09G %2D ESA_AppD%2DF": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "11_ESA_FINAL_Appendix06 %2D A4C2U9": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B%2D3%2Do %2D %2D A0T2H2 %2D ESA%2DEA Fish Atlas Proposed 3 of 4": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D1%2Dhh %2D ESA %2D EPP 37 pages %2D Volume II %2D Part 2 %2D Appendix XI to ESA %2D ACCE Application %2D  A0X6C0  ": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A3H4X9 %2D Attachment 8A %2D ESA %2D Appendix G Part 7 of 7": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A1U7D7 %2D 27 %2D ESA_REV1_Aug_2010_Part_6_of_23": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D6%2Df %2D %2D A0T3F7 %2D ESA%2DEA Tech Reports %2D Vegetation Env Res Maps 1%2D20k 03": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D14v %2D Mt Not ESA 2of 6 A1G4R4": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "C00017%2D5 Attachment 5 %2D ESA_summary %2D A6V3E9": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B35%2D40 %2D ESA_Update_September_30th_App_B_Part_17 %2D A2D7T7 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D02%2D12 %2D NGTL Horn River Project %2D ESA Appendix 1 Aquatic Report_Part 2 of 5 %2D A1R8D9 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B2%2D9  ESA_Appendix_D (A3Q6G5)": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A3H4W8 %2D Attachment 8A %2D ESA %2D Appendix D Part 7 of 10": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "Attachment 08_05_ESA_FINAL_Appendix01 %2D A3W5Q9": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A1W4J6 %2D ESA Appendix A EPP Main": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D4%2Df %2D %2D A0T2K2 %2D ESA%2DEA Geotechnical Rpts Appendix A %2D Map ERM TERRAIN 1%2D20k 00 Legend pg 2": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A79036%2D7 07 Peace River Mainline Abandonment %2D Appendix 9 %2D ESA Attachment B ESIS 3 of 11 %2D A5E5Z8": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B5%2D05 %2D Appendix 06 %2D ESA Part 05 of 10 %2D A4E6W5": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D9%2Dq %2D %2D A0T3T9 %2D ESA%2DEA Tech Rpts Wildlife and Wildlife Habitat Appendix A Env Res Maps 1%2D20k 10": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D01R %2D Volume 4 %2D Environmental Assessment Report %2D Executive Summary A0W9I6": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B3%2D12 %2D Vol 6B %2D Marine Terminal ESA (Part 1 of 4) %2D A1T0G2 ": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "B%2D2Z Volume III %2D ESA %2D Align Sheets (Part 9) (A0Z1C1)": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A80172%2D7 Section 4 %2D ESA %2D AppA %2D EPP 2of3 %2D A5G2X1": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A89944%2D13 Section 10%2DAppendix 10%2D2%2DESA Part 4_Appendix_c %2D A6A2D1": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A3F4K7 %2D SET_ESA_Part5_Appendix4en": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B5%2D15 %2D Appendix 06 %2D ESA Appendix 2 %2D Environmental Alignment Sheet Package Part 01 of 18 %2D A4E6X5": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A92619%2D14 14 ESA Sections 12 to 16 %2D A6F4Q7": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A83597%2D6 Attachment 5 MHR Contingency Crossing ESA Update %2D A5L7V6": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D11t %2D Alignment Sheet %2D Manitoba 01 (A0Y0T0 )": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A87481%2D11 Sharrow South No. 2 Phase 1 ESA Final %2D A5W5D3": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "Environmental Assessment %2D EPSI 23AGW82760 %2D A4G6V2": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "01_ESA_MAIN_FINAL_pt1of2 %2D A4C2T9": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A%2D29 %2D Letter and Amendment to Scope of the Environmental Assessment  A1H5K9": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B5%2D28 %2D Appendix 06 %2D ESA Appendix 2 %2D Environmental Alignment Sheet Package Part 14 of 18 %2D A4E6Y8": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A90753%2D4 Acadia Valley Receipt MS Phase 1 ESA %2D Final %2D A6C4V5": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B26%2D2 %2D Revised Witness Panel and Responsibilities for Cross Examination on ESA %2D December 4 Continuation %2D A3Q8W5": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A3E4S5 %2D ESA Appendix B %2D Air %2D App A": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B%2D2w %2D Accidents and Malfunctions  A0X2K2 ": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "B%2D3cc %2D Alignment Sheet %2D Alberta 29  %2D A0X2T6": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B8%2D22 %2D North_Montney_ESA_Sec 10 REVISED %2D A3V1U9": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A1A0E7 %2D Appendix 5 Figure 1%2D3": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "B2%2D14 %2D Vantage Pipeline Project Vol II ESA Section 10(c) %2D A1X5X9": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A3E4S1 %2D ESA %2D Main Section": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A1Y7Y6 %2D ESA Report Appendix B MCA Supporting Documents": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A99939%2D3 A1 Phase 1 ESA Final %2D Monchy Pipeline %2D A6V2C2": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A3E0R1 %2D Line 2 Replacement ESA %2D 3 of 21": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B3%2D23 %2D Appendix I Detailed Wildlife Baseline Surveys Methods and Results Part 1 %2D A1X1Z0": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B3%2D12 %2D Appendix C Soil_Vegetation and Wetlands Baseline Figures C59%2D63 Part 10 %2D A1X1X9": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B6%2D04 %2D Appendix 06 %2D ESA Appendix 3B %2D Facility Soil Survey Part 2 of 2 %2D A4E6Z7": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A72401%2D13 V4 01 ESA Appendix A%2DEPP %2D A4T0Z3": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A0E6G8 %2D Volume 4 Env. Impact Assess. Part 2": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "B%2D18a %2D Updated Supplemental ESA  %2D part 1 of 3 A1G7K9": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D1W  %2D ESA %2D NWML_KomieExt_02_of_17  %2D A2F4L0": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A91527%2D1 Order ZO%2DN081%2D001%2D2016 Cond.5 Ph I ESA %2D A6D7Q6": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A2I0L9 %2D ESA Appendix 7 TLU Sections 4 and 5": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B3%2D26_ESA_Appendix_2_Alignment_Sheets_Part2of5 %2D A4K2T2": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "B%2D2pp %2D KXL ESA %2D Appendix A Part 10 of 14 %2D A1I9Y1": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A0W5X7 %2D ESA Sections 1 %2D 4": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A0R8Y2 %2D Stittsville ESA %2D Appendix C (Photographs) %2D Part 4": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D11k  %2D Alignment Sheet %2D Alberta 24 (A0Y0S1)": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B3%2D30 %2D Vol 8B %2D Marine Transportation ESA (Part 5 of 11) %2D A1T0I0 ": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "A3K1F4 %2D Supplemental Environmental Filing %2D Part 4 of 7": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B2%2D25 %2D Volume IIA %2D ESA %2D Appendix 6 %2D Aquatic Assessement %2D Appendix C and D Nonfish Bearing Drainage Site and Wetland Site Records %2D A3E3A0": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A63951%2D7 V4 %2D ESA_Appendix B5_CS 144 Brockville %2D A4D9I2": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A%2D12B %2D Draft Scope of Environmental Assessment A1E1W8 ": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B2%2D12  ESA_Appendix_E_Part3of5 (A3Q6G8)": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A3F6W1 %2D Line 3 Replacement Project ESA %2D Part 4 of 16": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D2Q Volume II %2D ESA %2D Appendices V and VI (A0Z1A2)": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D3%2Dr %2D %2D A0T2H5 %2D ESA%2DEA Fish and Fish Habitat Appendix Env Res Maps ERM WETLAND FISH%2DHABITAT 1%2D20k 08to15": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1W6Y1 %2D ESA Appendix 6": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A1U2X0 %2D Cutbank River Lateral Loop (Bald Mountain) ESA_rev1_part_4_of_13": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B3%2D14 %2D Vol 6B %2D Marine Terminal ESA (Part 3 of 4) %2D A1T0G4 ": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "B36%2D15 %2D ESA_Update_September_30th_App_C_Part_4 %2D A2D7X3 ": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B2%2D23 %2D Vantage Pipeline Project Vol II ESA Section 18(a) %2D A1X5Y8": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A74787%2D4 V2 %2D ESA_Amendment_Appendix_C %2D A4W7Y4": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "B%2D2kk %2D KXL ESA %2D Appendix A Part 5 of 14 %2D A1I9X6": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A1U7A9 %2D 30 %2D ESA_REV1_Aug_2010_Part_9_of_23": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D2s Vol II %2D ESA %2D Appendix IV and V A0Y1V5": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A94156%2D4 2021 NGTL SXP %2D ESA Update %2D Appendix B %2D Soils %2D A6H7R8": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A1X2F3 %2D Draft Environmental Assessment": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A2T8E2 %2D APL_Pipe Relocation_ESA Addendum_June 1, 2012": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A0L5S4 %2D ESA Part 2A": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A1W4K3 %2D ESA Appendix C SLP Soils Appendices": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "B2%2D21  ESA_Appendix_I%2DJ (A3Q6H7)": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B18%2D20 %2D Supplemental ESA %2D Appendix 7a %2D Environmental Protection Plan %2DA3L5C5": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "A1D3J6 %2D Archaeological Impact Assessment %2D Permit 2007%2D344 %2D plates 3 %2D 4": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "11 ESA Appendix03_Part1of4 %2D A4F3A2": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D14y %2D Mt Not ESA 5 of 6 A1G4R7": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A1D3J1 %2D Archaeological Impact Assessment %2D Permit 2007%2D344 %2D Figure 1 Permit area": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D9%2Dj %2D %2D A0T3T2 %2D ESA%2DEA Tech Rpts Wildlife and Wildlife Habitat Appendix A Env Res Maps 1%2D20k 03": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1J2W7 %2D Interpipe Delivery Expansion ESA": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B2%2D22_ESA_Appendix_1E_Kettle_EPP_Part1of1 %2D A4K2S7": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D4%2Dcc %2D %2D A0T2Q5 %2D ESA%2DEA Geotechnical Rpts Appendix A Maps ERM TERRAIN 1%2D20k 23 ": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D02%2D21 %2D NGTL Horn River Project %2D ESA Appendix 3 Rare Plant Part 2 of 5 %2D A1R8E8 ": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A81755%2D5 Appendix 3 %2D ESA Executive Summary %2D A5I8I3": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D3rr %2D Alignment Sheet %2D Alberta 44  %2D A0X2V1": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A0K6S5 %2D Environmental and Socio%2DEconomic Assessment": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A3H4X2 %2D Attachment 8A %2D ESA %2D Appendix E and F": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "Supplemental Environmental and Socio%2Deconomic Assessment %2D February 2014 (Part 2 of 2) %2D A3V0F8": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B35%2D48 %2D ESA_Update_September_30th_App_B_Part_25 %2D A2D7U5 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A79036%2D15 15 Peace River Mainline Abandonment %2D Appendix 9 %2D ESA Attachment B ESIS 11 of 11 %2D A5E6A6": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A2I0L4 %2D ESA Appendix 7 TLU Sections 1 to 3": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D1p  %2D Groundbirch ESA_NEB_13of14 (A1J6J5)": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A92619%2D17 17 ESA Appendix B EAS%2DPart A %2D A6F4R0": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B35%2D15 %2D ESA_Update_September_30th_Vegetation_Section_8(c) %2D A2D7R2 ": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A3H4W5 %2D Attachment 8A %2D ESA %2D Appendix D Part 4 of 10": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D14u %2D Mt Not ESA 1of 6 A1G4R3 ": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D09j %2D Westcoast ESA Supplement %2D Jan 2010": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D3aa %2D Alignment Sheet %2D Alberta 27  %2D A0X2T4": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "Attachment 1 to  Enbridge Response to NEB IR No. 1.3.b %2D ESA %2D A3V7J7": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B36%2D4 %2D ESA_Update_September_30th_App_B_Part_31 %2D A2D7W2 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B5%2D14 %2D V5A_ESA_06of16_BIOPHYSICAL %2D A3S1L8": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B%2D8%2Dcc %2D %2D A0T3R9 %2D ESA%2DEA Wetlands Rpts Appendix G %2D Wetland Fish Habitat Env Res Map 1%2D20k 022": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B2%2D01_ESA_Main_Sec_1_to_5_Part1of12 %2D A4K2Q6": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D2K Volume II %2D ESA %2D Section 6 %2D Effects Assessment (A0Z0Z6)": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B18%2D8 %2D Supplemental ESA %2D Appendix 4 %2D Wetlands Evaluation %2D A3L5A3": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B%2D9%2Dv %2D %2D A0T3U4 %2D ESA%2DEA Tech Rpts Wildlife and Wildlife Habitat Appendix A Env Res Maps 1%2D20k 15": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A0S5J0 %2D ESA %2D Figure 9.5 Cumulative Environmental Effect Area": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B3%2D16 %2D Vol 6C %2D Human Environment ESA (Part 1 of 3) %2D A1T0G6 ": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A2A6V9 %2D 2012 Eastern Mainline Expansion ESA_part 1 of 3": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A90753%2D16 Lawrence Lake Receipt MS Phase 1 ESA %2D Final %2D A6C4W7": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B2%2D21_ESA_Appendix_1D_LiegeLateral_EPP_Part1of1 %2D A4K2S6": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A81160%2D10 7178_eicbf1_am_015_pays_151026 %2D A5H8J4": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A75795%2D17 Appendix P %2D ESA Part 6 %2D A4Y5F2": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A0R4A6 %2D Sec 6 SectionG Blackpool ESA_rep": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "10 ESA Appendix02_Part2of2 %2D A4F3A1": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "A74788%2D19 V2 %2D ESA_Amendment_Appendix_D_Part36 %2D A4W8D8": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "B%2D1L %2D  ESA Appendix D Rare Plant Survey (A1D5S2)": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A1X7Q7 %2D ESA %2D Part 4 of 4": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A74792%2D2 V3 %2D ESA_Amendment_Appendix_C_Part2 %2D A4W8J1": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "B2%2D5 %2D Volume II %2D ESA %2D Section 6 %2D Environmental and Socio%2DEconomic Effects Assessment %2D A3E2Y0": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A0U4C9 %2D NEB %2D Section 58 Application %2D Section 9 ESA Part 6": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B1%2D37 Appendix 10%2D2_TCPL_KNC_ESA_Appendix E %2D 2 %2D A4A2L8": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "B%2D3dd %2D Alignment Sheet %2D Alberta 30  %2D A0X2T7": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A0R3X3 %2D SEACOR App E Phase I ESA %2D Juliet BC": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B2%2D5 %2D Vantage Pipeline Project Vol II ESA Section 4(a) %2D A1X5X0": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B18%2D28 %2D Supplemental ESA %2D Appendix 9f %2D Environmental Alignment Sheet Package %2D A3L5D3": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1X7R2 %2D ESA %2D Appendix 5 %2D Wetlands": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A74788%2D5 V2 %2D ESA_Amendment_Appendix_D_Part22 %2D A4W8A7": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A3H4W3 %2D Attachment 8A %2D ESA %2D Appendix D Part 2 of 10": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B3%2D31 %2D Vol 8B %2D Marine Transportation ESA (Part 6 of 11) %2D A1T0I1 ": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "A74787%2D15 V2 %2D ESA_Amendment_Appendix_D_Part11 %2D A4W7Z5": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A2H7C8 %2D Section 9 %2D Appendix 9%2D2 %2D ESA_Sections_1%2D5": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "Attachment 12g %2D ESA Appendix_C_Part_2of3 %2D A4F8K1": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D11r %2D Alignment Sheet %2D Alberta 32 (A0Y0S8 )": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A74508%2D9 Appendix 6.1 %2D ESA Part 7 of 10 %2D A4W2T9": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "Attachment 08_09_ESA_FINAL_Appendix04 %2D A3W5R3": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B3%2D29 %2D Vol 8B %2D Marine Transportation ESA (Part 4 of 11) %2D A1T0H9 ": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "A2K5C5 %2D ESA Mica Creek Pipeline Project S7 to S11": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A3H4W9 %2D Attachment 8A %2D ESA %2D Appendix D Part 8 of 10": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A87033%2D30 ESA_App_E_Fish_Tech_Part1_of_2 %2D A5V8G0": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A3F6X2 %2D Line 3 Replacement Project ESA %2D Part 15 of 16": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B5%2D08 %2D Appendix 06 %2D ESA Part 08 of 10 %2D A4E6W8": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A98641%2D16 NCE_ESA_Appendix2 %2D A6T2W3": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A87481%2D12 Steele Lake Phase 1 ESA Final %2D A5W5D4": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A73674%2D9 Section_5%2DESA%2DAppA%2DEPP%2D2of2 %2D A4V0Q0": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "Willioston Hunter Gas Gathering Pipeline ESA %2D A3R7Y1": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A0T7K9 %2D Stns 134 and 1703 ESA %2D Appendix E %2D Stn 1703 Noise Surveys in 1997 and 1998": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "A82071%2D9 Section 4 %2D ESA %2D Interactions Table %2D A5J4T4": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A2S7S3 %2D MRPL Replacement ESA Appendix 2": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1W4K8 %2D ESA Appendix F SLP Fisheries": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "Attachment 08_04_ESA_FINAL_S7toS12 %2D A3W5Q8": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A1Z5V5 %2D Cutbank%2DMusreau Area Expansion %2D ESA_Part 1 of 6": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A3F8D1 %2D Norma %2D Attachment 7 %2D ESA Interactions Table": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A0F7D7 %2D Appendix 3 %2D Moyie EA %2D Supplementary Report": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A1A0G3 %2D Appendix 5 Figure 4.3%2D18": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A72401%2D25 V4 13 ESA Appendix E%2DPart 3 of 4 %2D A4T1A5": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D9%2Dw %2D %2D A0T3U5 %2D ESA%2DEA Tech Rpts Wildlife and Wildlife Habitat Appendix A Env Res Maps 1%2D20k 16": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B3%2D08 %2D Appendix 06 %2D ESA Appendix 11 %2D Socio%2DEconomic Technical Report Part 1 of 2 %2D A4E7D8": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D5%2Dg %2D %2DA0T3C8 %2D ESA%2DEA Tech Rpts Soils Appendix G Env Res Maps ERM SOILS 1%2D20k 02": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A74994%2D2 Order no. XG%2DN150%2D6%2D2000 %2D A4X3G7": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "ExternalPaperOnly_e (9)": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B35%2D17 %2D ESA_Update_September_30th_Wildlife_Section_9(b) %2D A2D7R4 ": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D9%2Ddd %2D %2D A0T3V2 %2D ESA%2DEA Tech Rpts Wildlife and Wildlife Habitat Appendix A Env Res Maps 1%2D20k 23": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A0U4D3 %2D NEB %2D Section 58 Application %2D Section 9 ESA Part 10": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D2b %2D Redwillow ESA Section 2 %2D A1C3V6": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D8%2Dn %2D %2D  A0T3Q4 %2D ESA%2DEA Wetlands Rpts Appendix G %2D Wetland Fish Habitat Env Res Map 1%2D20k 07": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D4%2Du %2D %2D A0T2L7 %2D ESA%2DEA Geotechnical Rpts Appendix A Maps ERM TERRAIN 1%2D20k 015 ": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A0Y0Z1 %2D Appendix G %2D ESA": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B1%2D11 %2D 02_1313340047_TCPL_CCP_ESA_FINAL_Sec5_Part1 %2D A3V4K9": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D02%2D36 %2D NGTL Horn River Project %2D ESA Appendix 6 TLU Report Part 6 of 11 %2D A1R8G3 ": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A74788%2D4 V2 %2D ESA_Amendment_Appendix_D_Part21 %2D A4W8A6": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "B%2D12b  %2D ESA Section 18 %2D Page 7%2D1 (A0Y0V4)": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A81160%2D32 7178_eicbf2_am_015_pays_151026a %2D A5H8Q0": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B35%2D29 %2D ESA_Update_September_30th_App_B_Part_6 %2D A2D7S6 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D3b %2D Alignment Sheet %2D Alberta 02 %2D  A0X2Q9 ": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B35%2D44 %2D ESA_Update_September_30th_App_B_Part_21 %2D A2D7U1 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "Appendix 5 %2D ESA %2D Intro %2D A3R5E3": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D1Y  %2D ESA %2D NWML_KomieExt_04_of_17  %2D A2F4L2": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "B35%2D11 %2D ESA_Update_September_30th_Fish_Section_7(a) %2D A2D7Q8 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A95522%2D10 Saddle River ESA %2D A6K1A7": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A1S1X7 %2D Kearl_ESA_Appendix5_HistoricalResources_Mar10_Part_2": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1W5R6 %2D ESA Phase 2 Part 2 of 4": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A0F7E0 %2D Appendix 3 %2D Preliminary EA (Photos)": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D11b %2D  Alignment Sheet %2D Alberta 10 (A0Y0R2_": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B2%2D18   ESA_Appendix_G_Part3of4 (A3Q6H4)": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A92619%2D10 10 ESA Sections 1 to 4 %2D A6F4Q3": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A0W9U0 %2D NEB %2D Draft Scope of the Environmental Assessment": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B35%2D25 %2D ESA_Update_September_30th_App_B_Part_2 %2D A2D7S2 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D2E Volume II %2D ESA %2D Section 5 %2D ESE Setting (Part1) (A0Z0Z0)": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "B%2D2j %2D Noise Appendix  A0X2I9": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "A94156%2D6 2021 NGTL SXP %2D ESA Update %2D Appendix D %2D Serious Harm %2D A6H7S0": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D2hh %2D KXL ESA %2D Appendix A Part 2 of 14 %2D A1I9X3": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A1D3J5 %2D Archaeological Impact Assessment %2D Permit 2007%2D344 %2D plates 1 %2D 2": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A3H4V8 %2D Attachment 8A %2D ESA %2D Appendix A": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A1Y7Z0 %2D ESA Report Appendix E Inadverten Returns Plan": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B3%2D11 %2D Appendix C Soil_Vegetation and Wetlands Baseline Figures C53%2D58 Part 9 %2D A1X1X8": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D4%2Di %2D %2D A0T2K5 %2D ESA%2DEA Geotechnical Rpts Appendix A Maps ERM TERRAIN 1%2D20k 03 ": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1A0G7 %2D Appendix 5 Figure 4.4%2D3": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "A63951%2D30 V4 %2D ESA_Appendix E to I_Sec5 Baseline Appendices %2D A4D9K5": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B2%2D5  ESA_Main_Part_4_of_5 (A3Q6G1)": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A98624%2D11 10 EDML_ESA_PART_B %2D A6T2G3": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A3E4S3 %2D ESA %2D Appendix A EPP %2D Appendices": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A87481%2D10 Rambling Creek East Phase 1 ESA Final %2D A5W5D2": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A1X7R0 %2D ESA %2D Appendix 3 %2D Noise": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "A74787%2D12 V2 %2D ESA_Amendment_Appendix_D_Part8 %2D A4W7Z2": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A0R8X4 %2D Stittsville ESA %2D Main Report": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A2H7D4 %2D Section 9 %2D ESA_Appendix 3_Environmental Protection Plan_Appendix_A": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A74792%2D10 V3 %2D ESA_Amendment_Appendix_C_Part10 %2D A4W8L5": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "Section_5%2DESA%2DAppA%2DEPP%2D3of3 %2D A4U3W6": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D1r  %2D ESA Appendix H Alignment Sheets Part 2 of 3 %2D Sheets 9 to 17 (A1D5S8)": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B2%2D16_ESA_Main_Sec_8_Part2of2 %2D A4K2S1": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "1996%2D05%2D01 Report of the Joint Review Panel": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B8%2D27 %2D North_Montney_ESA_Sec 17_REVISED %2D A3V1V4": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B%2D2M Volume II %2D ESA %2D Section 8 %2D Inspection (A0Z0Z8)": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A3E0R9 %2D Line 2 Replacement ESA %2D 11 of 21": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A98624%2D20 19 EDML_ESA_Appendix_G_Aquatic_Resources_Part A %2D A6T2H2": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D02%2D46 %2D NGTL Horn River Project %2D ESA Appendix 9 Align Sheets Part 2 of 3 %2D A1R8H3 ": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A2I0L6 %2D ESA Appendix 8 AIA Sections 4.4 to 6": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B3%2D1 %2D Vol 6A P1 %2D Pipelines and Tank Terminal ESA (Part 1 of 5) %2D A1T0F1": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A1Z5W0 %2D Cutbank%2DMusreau Area Expansion %2D ESA_Part 6 of 6": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D9%2Du %2D %2D A0T3U3 %2D ESA%2DEA Tech Rpts Wildlife and Wildlife Habitat Appendix A Env Res Maps 1%2D20k 14": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A3K3F5 %2D CE2_Enbridge_ESA_Appendix4": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A82638%2D18 Attachment 2.2 Regional Map ESA %2D A5K4L4": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "A0K4T8 %2D Stage 1 Archaeological Assessment": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A3E0R2 %2D Line 2 Replacement ESA %2D 4 of 21": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D6%2Dd %2D %2D A0T3F5 %2D ESA%2DEA Tech Reports %2D Vegetation Env Res Maps 1%2D20k 01": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1G0H3 %2D ESA for the ARC Saddle Hills Pipeline Loop": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B5%2D27 %2D Appendix 06 %2D ESA Appendix 2 %2D Environmental Alignment Sheet Package Part 13 of 18 %2D A4E6Y7": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A89944%2D18 Section 10%2DAppendix 10%2D2%2DESA Part 9_Appendix_h %2D A6A2D6": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D2k %2D Soils  A0X2J0": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A1U2W9 %2D Cutbank River Lateral Loop (Bald Mountain) ESA_rev1_part_3_of_13": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "Section_5%2DESA%2DAppB%2DWildlife%2D2of2 %2D A4U3X5": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B2%2D20 %2D Vantage Pipeline Project Vol II ESA Section 15(d) %2D A1X5Y5": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A96233%2D10 Attachment NEB 3.1%2D3 McLeod_ESA_Part 7 %2D A6L2C9": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "ExternalPaperOnly_e (7)": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "18384%2D507 DSA LR%2D2 2015%2D04%2D09 final %2D A4U3H3": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D3tt %2D Alignment Sheet %2D Alberta 46  %2D A0X2V3": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D2m %2D Redwillow ESA Section 7 %2D A1C3W7": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "Appendix 6 %2D Hardisty ESA Part 3 of 6 %2D A4K0I7": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "19 ESA Appendix06_Part2of2 %2D A4F3C0 (1)": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A1A2E5 %2D Appendix 2 %2D ESA References": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A3K3F8 %2D CE2_Enbridge_ESA_Appendix5c": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "C00017%2D8 Attachment 5 %2D ESA_summary %2D A6V3F2": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B1%2D17 %2D ESA Section 1 to 4 %2D A2A6Q3": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D2O Volume II %2D ESA %2D Section 10 %2D Conclusion (A0Z1A0)": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A1X7Q8 %2D ESA %2D Appendix 1 %2D Soils": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A73897%2D17 17 Vaughan Mainline Expansion Project %2D ESA_AppE Part 1 (8 of 9) %2D A4V3R0": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A1R2D1 %2D Appendix 6 %E2%80%93 ESA Part 9 of 9 Appendix F": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A3E4T1 %2D ESA Appendix H %2D Sections 1%2D3": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A2K5C8 %2D ESA Mica Creek Pipeline Project Appendix 6": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A87481%2D4 Grew Lake East Phase 1 ESA Final %2D A5W5C6": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D2b %2D Introduction A0X2I1 ": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A3E0S1 %2D Line 2 Replacement ESA %2D 13 of 21": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A81160%2D34 7178_eiccf1_am_035_mndetails_151111a %2D A5H8Q2": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A1X7Q6 %2D ESA %2D Part 3 of 4": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A89944%2D14 Section 10%2DAppendix 10%2D2%2DESA Part 5_Appendix_d %2D A6A2D2": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "B%2D2S Volume III %2D ESA %2D Align Sheets (Part 2) (A0Z1A4)": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B36%2D10 %2D ESA_Update_September_30th_App_B_Part_37 %2D A2D7W8 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D3q %2D Alignment Sheet %2D Alberta 17  %2D%2D A0X2S4 ": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A98624%2D14 13 EDML_ESA_Appendix A_EPP %2D A6T2G6": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A%2D7a%2D Letter and Scope of the Environmental Assessment (A0Y2Q2 )": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B2%2D26 %2D Volume IIA %2D ESA %2D Appendix 7 %2D Wetland Evalution %2D Sections 1 to 10 %2D A3E3A1": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A3H4X6 %2D Attachment 8A %2D ESA %2D Appendix G Part 4 of 7": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A1R5X4 %2D Appendix 4 %E2%80%93 ESA A5 Traditional Land Use Assessment": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A0L7Z7 %2D ESA %2D Appendix 1 Part B %2D Figures": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A0Y2I7 %2D Draft Scope of the EA %2D Southern Lights Pipeline Project": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A3I8I1 %2D Attachment 09F %2D ESA_AppC_2of2": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D11g %2D Alignment Sheet %2D Alberta 20  (A0Y0R7)": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A87033%2D28 ESA_App_D_Soil_Part1_of_2 %2D A5V8F8": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "A0U4C6 %2D NEB %2D Section 58 Application %2D Section 9 ESA Part 3": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A99467%2D5 04 Attachment NEB 2.2%2D1_NCC North Star ESA Appendices A to H %2D A6U5F3": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D02%2D5 %2D NGTL Horn River Project %2D ESA Environmental and Socio%2Deconomic Setting %2D A1R8D2 ": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B%2D14z %2D Mt Not ESA 6 of 6 A1G4R8": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A0R4C1 %2D Sec 6 SectionL Juliet ESA_rep": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B35%2D45 %2D ESA_Update_September_30th_App_B_Part_22 %2D A2D7U2 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D2h Vol II %2D ESA %2D Section 5 (Part 4) %2D ESE Setting A0Y1U4": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B%2D5%2Db %2D %2D A0T3C3 %2D ESA%2DEA Tech Reports Soils Rpt 2 of 2": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A3H4W1 %2D Attachment 8A %2D ESA %2D Appendix C": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A0R8X9 %2D Stittsville ESA %2D Appendix C (Photographs) %2D Part 1": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B2%2D24 %2D Vantage Pipeline Project Vol II ESA Section 18(b) %2D A1X5Y9": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A74792%2D7 V3 %2D ESA_Amendment_Appendix_C_Part7 %2D A4W8K8": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "B%2D16C %2D Attachment to Nahirniak IR %2D  ESA %2D Appendix III %2D Economic Effects A1C8Y9 ": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B2%2D18%2D Volume IIA %2D ESA %2D Appendix 3 %2D Soil Survey and Reclamation Suitability Evaluation %2D A3E2Z3 ": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A79036%2D12 12 Peace River Mainline Abandonment %2D Appendix 9 %2D ESA Attachment B ESIS 8 of 11 %2D A5E6A3": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A3F6W0 %2D Line 3 Replacement Project ESA %2D Part 3 of 16": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B2%2D05_ESA_Main_Sec_1_to_5_Part5of12 %2D A4K2R0": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D11f %2D Alignment Sheet %2D Alberta 19  (A0Y0R6)": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B35%2D35 %2D ESA_Update_September_30th_App_B_Part_12 %2D A2D7T2 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B2%2D03_ESA_Main_Sec_1_to_5_Part3of12 %2D A4K2Q8": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A94156%2D5 2021 NGTL SXP %2D ESA Update %2D Appendix C %2D Aquatics %2D A6H7R9": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A2D5G5 %2D 1057533 Alberta Ltd_ESA_App2_Aquatics": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "B%2D2q %2D KXL ESA %2D Section 10 Part 13 of 15 %2D A1I9V6": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B3%2D8 %2D Appendix C Soil_Vegetation and Wetlands Baseline Figures C%2D32%2D37 Part 6 %2D A1X1X5": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1Z1J4 %2D Appendix_G_%2D_ESA_Report_Appendix_E_Inadvertent_Returns_Plan_2011%2D05%2D10": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A83582%2D1 LSD 10%2D23%2D038%2D01 W4M Phase 2 ESA (600%2D221%2D02 R01) %2D A5L7K2": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D2Y Volume III %2D ESA %2D Align Sheets (Part 8) (A0Z1C0)": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A74792%2D3 V3 %2D ESA_Amendment_Appendix_C_Part3 %2D A4W8J4": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "B%2D9%2Di %2D %2D A0T3T1 %2D ESA%2DEA Tech Rpts Wildlife and Wildlife Habitat Appendix A Env Res Maps 1%2D20k 02": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A0L5S3 %2D ESA Part 1B": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D2z %2D Environmental Protection Plan   A0X2K5 ": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A2K2E9 %2D Appendix 2 %2D ESA and Appendix A": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B2%2D21 %2D Volume IIA %2D ESA %2D Appendix 5B %2D Kingman Station Environmental Noise Assessment %2D A3E2Z6": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "B6%2D05 %2D Appendix 06 %2D ESA Appendix 4 %2D Air Quality Assessment Part 1 of 4 %2D A4E6Z8": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "08 ESA Appendix01 %2D A4F2Z9": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A0U4D1 %2D NEB %2D Section 58 Application %2D Section 9 ESA Part 8": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A2I0L5 %2D ESA Appendix 8 AIA 1 to 4.3": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D2T Volume III %2D ESA %2D Align Sheets (Part 3) (A0Z1A5)": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1R2C8 %2D Appendix 6 %E2%80%93 ESA Part 6 of 9 Appendix C": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A1S7X2 %2D ESA Appendix 9": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A2A0E3 %2D Harvest Gething ESA Appendix 3": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A1W4L2 %2D ESA Appendix H N4 Loop AIA Vol 2 of 2": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B2%2D29 %2D Volume IIA %2D ESA %2D Appendix 7 %2D Wetland Evalution %2D App a %2D Health Function Site Cards Pt 3 %2D A3E3A4": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A1K0D4 %2D Albright North Crossover %2D 5680 ESA Part 4 of 4": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B3%2D18 %2D Appendix 06 %2D ESA Appendix 12 %2D Decommissioning Environmental Technical Report Part 09 of 14 %2D A4E7E8": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B1%2D32 Appendix 10%2D2_TCPL_KNC_ESA_Appendix A %2D 1 %2D A4A2L3": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A3L6U9 %2D Update to Economic and Socioeconomic Assessment": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D02%2D34 %2D NGTL Horn River Project %2D ESA Appendix 6 TLU Report Partt 4 of 11 %2D A1R8G1 ": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B3%2D27 %2D Vol 8B %2D Marine Transportation ESA (Part 2 of 11) %2D A1T0H7 ": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "B%2D11a %2D ESA Section 7 %2D Updates to Pages 47%2D60 (A0Y0R1)": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "B2%2D19_ESA_Appendix_1B_BearCanyon_EPP_Part1of1 %2D A4K2S4": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D14o %2D Supplemental ESA 12 of 17 A1G4Q7": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A0K7S8 %2D ESA Appendix 6": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B8%2D19 %2D North_Montney_ESA_Sec 7 REVISED %2D A3V1U6": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "B3%2D18 %2D Appendix D 2010 Soil Survey of Bakken Pipeline %2D A1X1Y5": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "B2%2D7  %2D Vantage Pipeline Project Vol II ESA Section 5 %2D A1X5X2": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A2T5X5 %2D Laurier ReRoute ESA %2D Part 3": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D8%2Ds %2D %2D A0T3Q9 %2D ESA%2DEA Wetlands Rpts Appendix G %2D Wetland Fish Habitat Env Res Map 1%2D20k 012": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D6%2Dh %2D %2D A0T3F9 %2D ESA%2DEA Tech Reports %2D Vegetation Env Res Maps 1%2D20k 05": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A3D2J2 %2D L67 Kerrobert and Stony Beach Connections_ESA": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B3%2D36 %2D Vol 8B %2D Marine Transportation ESA (Part 11 of 11) %2D A1T0I6 ": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "02 ESA MAIN Section06_Part1of3 %2D A4F2Z3": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B3%2D11 %2D Appendix 06 %2D ESA Appendix 12 %2D Decommissioning Environmental Technical Report Part 02 of 14 %2D A4E7E1": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1D3J3 %2D Archaeological Impact Assessment %2D Permit 2007%2D344 %2D Figure 3 Bio zones 2": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A0R4A1 %2D Sec 6 SectionB Stony ESA_rep": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B2%2D4 %2D Volume II %2D ESA %2D Sections 2 %2D 5 %2D A3E2X9": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A86315%2D5 Appendix C ESA %2D A5U5I6": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B2%2D07_ESA_Main_Sec_1_to_5_Part7of12 %2D A4K2R2": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D2P Volume II %2D ESA %2D Appendices I %2D IV (A0Z1A1)": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B2%2D17_ESA_Main_Sec_9_to_12_Part1of1 %2D A4K2S2": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D6%2Dq %2D %2D A0T3G8 %2D ESA%2DEA Tech Reports %2D Vegetation Env Res Maps 1%2D20k 14": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D8%2Dp %2D %2D A0T3Q6 %2D ESA%2DEA Wetlands Rpts Appendix G %2D Wetland Fish Habitat Env Res Map 1%2D20k 09": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B1%2D18 %2D 09_1313340047_TCPL_CCP_ESA_FINAL_AppB_Part4 %2D A3V4L6": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D1%2Dr  %2D ESA cover to p.4%2D10 %2D Volume II %2D ESA %2D Sections 1 %2D 4  A0X5Z4": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A1Y7Y7 %2D ESA Report Appendix C Public Ope House Material": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A3K1F2 %2D Supplemental Environmental Filing %2D Part 2 of 7": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B18%2D24 %2D Supplemental ESA %2D Appendix 9b %2D Environmental Alignment Sheet Package %2D A3L5C9": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A0L5U2 %2D ESA Rep H": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A1W6X6 %2D ESA Appendix 3 (2 of 2)": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B%2D3s %2D Alignment Sheet %2D Alberta 19  %2D A0X2S6": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A1A9S9 %2D Completion of Assessment review of the Edmonton Terminal Expansion Project": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A88111%2D9 Attachment Sawyer 05.2%2D1 s58 ESA %2D A5X5A4": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A73897%2D13 13 Vaughan Mainline Expansion Project %2D ESA_Sec 6 to 10 (4 of 9) %2D A4V3Q6": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "B%2D8%2Df %2D %2D A0T3L6 %2D ESA%2DEA Wetlands Rpts Appendix G %2D Wetland Fish Habitat Env Res Map  1%2D20k Index": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A0W5G0 %2D ESA  Appendix C%2D Pipeline Alignment and Environmental Protection Map": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A99467%2D4 03 Attachment NEB 2.2%2D1_NCC North Star ESA Sections 10 to 25 %2D A6U5F2": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A0S5I4 %2D ESA %2D Figure 9.3 Route Selection": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "Attachment 12a %2D ESA Sections 1%2D4 %2D A4F8J5": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "1402138_TCPL_SLL_ESA_SECTION_5_Part2%2DSECTION_11_FINAL %2D A4J6F1": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A3H4X5 %2D Attachment 8A %2D ESA %2D Appendix G Part 3 of 7": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A1R2D0 %2D Appendix 6 %E2%80%93 ESA Part 8 of 9 Appendix E": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "A74792%2D1 V3 %2D ESA_Amendment_Appendix_C_Part1 %2D A4W8I5": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "B%2D2e %2D Project Description A0X2I4 ": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A72401%2D12 V3 04 ESA Section 5%2DPart 3 to Section 11 %2D A4T0Z2": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A79036%2D5 05 Peace River Mainline Abandonment %2D Appendix 9 %2D ESA Attachment B ESIS 1 of 11 %2D A5E5Z6": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A2I0K8 %2D ESA Appendix 1 EPP Appendices F to H": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "A1A0F0 %2D Appendix 5 Figure 4.2%2D3": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A81524%2D28 ESA%2D Part 2 %2D A5I4X2": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A1W4K2 %2D ESA Appendix C SLP Soils Report": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A0Y1W8 %2D Terasen_Part II S58 ESA for Blue River Pump Station": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A90753%2D20 Mills Receipt MS Phase 1 ESA %2D Final %2D A6C4X1": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A0R1S2 %2D Correction to Environmental and Socio%2DEconomic Assessment": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B5%2D15 %2D V5A_ESA_07of16_BIOPHYSICAL %2D A3S1L9": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A72401%2D9 V3 01 Interactions Table %2D A4T0Y9": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B35%2D28 %2D ESA_Update_September_30th_App_B_Part_5 %2D A2D7S5 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A0Y2I6 %2D Draft Scope of the EA %2D Southern Lights Pipeline Project": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A1U7C2 %2D 33 %2D ESA_REV1_Aug_2010_Part_12_of_23": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A1D3J2 %2D Archaeological Impact Assessment %2D Permit 2007%2D344 %2D Figure 2 Arch. sites": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "B%2D9%2Dy %2D %2D A0T3U7 %2D ESA%2DEA Tech Rpts Wildlife and Wildlife Habitat Appendix A Env Res Maps 1%2D20k 18": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1X9F4 %2D ESA Appendix 3": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D2V Volume III %2D ESA %2D Align Sheets (Part 5) (A0Z1A7)": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D8%2D r %2D %2D A0T3Q8 %2D ESA%2DEA Wetlands Rpts Appendix G %2D Wetland Fish Habitat Env Res Map 1%2D20k 011": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D2L Vol II %2D ESA %2D Section 6 %2D ESE Effects A0Y1U8": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D2f %2D Redwillow ESA Section 5 Part 1 %2D A1C3W0": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "B%2D11y %2D Alignment Sheet %2D Manitoba 06 (A0Y0T5 )": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A72401%2D19 V4 07 ESA Appendix B%2DEAS Sheets 28%2D30%2DPart 6 of 6 %2D A4T0Z9": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B2%2D25  ESA_Appendix_L_Part3of3 (A3Q6I1)": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "A1W6X9 %2D ESA Appendix 5 (1 of 2)": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D11s  %2D Alignment Sheet %2D Alberta 33 (A0Y0S9)": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "06 ESA MAIN Section07_Part2of2 %2D A4F2Z7": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A1A0G4 %2D Appendix 5 Figure 4.3%2D19": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B3%2D20 %2D Appendix 06 %2D ESA Appendix 12 %2D Decommissioning Environmental Technical Report Part 11 of 14 %2D A4E7F0": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A3J0J5 %2D ESA %2D Technical Report %2D AIA PartB": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B35%2D33 %2D ESA_Update_September_30th_App_B_Part_10 %2D A2D7T0 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A99467%2D2 01 Attachment NEB 2.2%2D1_NCC North Star ESA Sections 01 to 06 %2D A6U5F0": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "B%2D7%2Db %2D %2D A0T3I1 %2D ESA%2DEA Heritage Resources Rpt Appendix A %2D Env Res Map 1%2D20k 01": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1G0H8 %2D ESA Appendix D Part 3 (Archaeology)": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B18%2D16 %2D Supplemental ESA %2D Appendix 4h %2D Wetlands Evaluation %2D A3L5C1": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A3K1F5 %2D Supplemental Environmental Filing %2D Part 5 of 7": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B2%2D6  ESA_Main_Part_5_of_5 (A3Q6G2)": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A1J4Z8 %2D ESA Appendix D %2D AIA 3 of 8": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1A0E4 %2D Appendix 5 G ESA": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A2Y1X9 %2D Appendix 3%2D1 %2D PRML Decommissioning ESA August2012 3of5": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A90753%2D22 Rossbear Lake Receipt MS Phase 1 ESA %2D Final %2D A6C4X3": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A1U5I7 %2D Cutbank River Lateral Loop (Bald Mountain) ESA_rev1_part_4_of_13": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A1Y7Y4 %2D ESA Report Figures 1 %2D 6": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A3K3F9 %2D CE2_Enbridge_ESA_Appendix6to7": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B%2D3t %2D Alignment Sheet %2D Alberta 20  %2D A0X2S7": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B2%2D17  ESA_Appendix_G_Part2of4 (A3Q6H3)": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A1J4Z7 %2D ESA Appendix D %2D AIA 2 of 8": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "B%2D3o %2D Alignment Sheet %2D Alberta 15  %2D A0X2S2 ": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D2i %2D KXL ESA %2D Section 10 Part 5 of 15 %2D A1I9U8": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A1U2X6 %2D Cutbank River Lateral Loop (Bald Mountain) ESA_rev1_part_10_of_13": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D7%2Dh %2D %2D A0T3I7 %2D ESA%2DEA Heritage Resources Rpt Appendix A %2D Env Res Map 1%2D20k 07": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1W7J3 %2D Pembina Nipisi Heavy Receipt Connection ESA": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A1A0E6 %2D Appendix 5 Figure 1%2D2": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "B%2D7%2Dl %2D %2D A0T3J1 %2D ESA%2DEA Heritage Resources Rpt Appendix A %2D Env Res Map 1%2D20k 011": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "10_ESA_FINAL_Appendix05 %2D A4C2U8": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "A0R8X5 %2D Stittsville ESA %2D Appendix A (Aerial Mosaics) %2D Part 1": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "Line 11 Westover Segment Replacement Project ESA Part 1 %2D A3T0Z0": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A2Y1X7 %2D Appendix 3%2D1 %2D PRML Decommissioning ESA August2012 1of5": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B14x %2D Mt Not ESA 4 of 6 A1G4R6": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D2L%2D  Redwillow ESA Section 6 Part 3 %2D A1C3W6 %2D": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A1X3K9 %2D Draft Scope of the Environmental Assessment": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B35%2D6 %2D ESA_Update_September_30th_Soils_Section_3(a) %2D A2D7Q3 ": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A73897%2D14 14 Vaughan Mainline Expansion Project %2D ESA_AppA (5 of 9) %2D A4V3Q7": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "Appendix 6 %2D Hardisty ESA Part 4 of 6 %2D A4K0I8": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B35%2D24 %2D ESA_Update_September_30th_App_B_Part_1 %2D A2D7S1 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "Appendix 6 %2D Environmental and Socio%2DEconomic Assessment %2D A3V7H5": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D1d  %2D ESA Executive Summary and Section 1.0 Introduction %2D Section 2.0 Project Description %2D Section 3.0 Public Consultation  (A1D5R4)": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "Attachment 12e %2D ESA Appendix_B_Part_2of2 %2D A4F8J9": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A75640%2D1 Simonette %2D Project Update Revised ESA and EPP %2D A4Y3H8": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D4p %2D Alignment Sheet %2D Manitoba 16  %2D A0X2Q3": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A94156%2D9 2021 NGTL SXP %2D ESA Update %2D Appendix G %2D Wildlife %2D A6H7S3": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A1W4L0 %2D ESA Appendix H N4 Upgrade AIA": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A90753%2D9 Blueberry Hill Receipt MS Phase 1 ESA %2D Final %2D A6C4W0": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A3H4X3 %2D Attachment 8A %2D ESA %2D Appendix G Part 1 of 7": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A89944%2D12 Section 10%2DAppendix 10%2D2%2DESA Part 3_Appendix_b %2D A6A2D0": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A1U9L6 %2D ESA Phase 1 %2D Appendices 2 and 3": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A1Z9F4 %2D Cheecham %2D Kettle River Area Expansion %2D Sec 58 ESA Section 11 References June 2011": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A3E0S2 %2D Line 2 Replacement ESA %2D 14 of 21": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A88335%2D3 Appendix IR1A %2D Petrolia Phase I ESA %2D Part 2 of 5 %2D A5X8C7": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A1W4K1 %2D ESA Appendix C N4 Loop Soils Appendices": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "B%2D2o %2D Redwillow ESA Section 9 %2D A1C3W9 ": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A0R3W4 %2D SEACOR App A Phase I ESA %2D Chip AB": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B3%2D14 %2D Appendix C Soil_Vegetation and Wetlands Baseline Figures C70%2D75 Part 12 %2D A1X1Y1": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B3%2D5 %2D Appendix C Soil_Vegetation and Wetlands Baseline Figures C12%2D19 Part 3 %2D A1X1X2": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1J4Z2 %2D ESA Appendix F %2D Environmental Alignment Sheets": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A3F4K6 %2D SET_ESA_Part4_Appendix4start": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A75795%2D14 Appendix M %2D ESA Part 3 %2D A4Y5E9": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A1W5R7 %2D ESA Phase 2 Part 3 of 4": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A98641%2D15 NCE_ESA_Appendix1C_1D %2D A6T2W2": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D2jj %2D KXL ESA %2D Appendix A Part 4 of 14 %2D A1I9X5 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A0W9T8 %2D Evan Shaw %2D Has Reviewed the Draft Scope of the Environmental Assessment %2D document meets its Requirements for the Proposed Keystone Pipeline Project": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A98038%2D1 Letter Revised ESA and Sensitive Habitat Assessment %2D A6S2I4": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A1C4E3 %2D Appendix D ESA Sec 1.0 %2D 3.0": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B35%2D32 %2D ESA_Update_September_30th_App_B_Part_9 %2D A2D7S9 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B18%2D23 %2D Supplemental ESA %2D Appendix 9a %2D Environmental Alignment Sheet Package %2D A3L5C8": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A90515%2D19 Steel Reef ESA %2D A6C0K3": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A1A5H9 %2D Appendix 2 %2D ESA References": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B3%2D27 %2D Appendix L Assessment of Greenhouse Gas Emissions from Construction of Bakken Pipeline %2D A1X1Z4": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A79036%2D8 08 Peace River Mainline Abandonment %2D Appendix 9 %2D ESA Attachment B ESIS 4 of 11 %2D A5E5Z9": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D14d %2D Supplemental ESA 1 of 17 A1G4L6": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D9%2Dh %2D %2D A0T3T0 %2D ESA%2DEA Tech Rpts Wildlife and Wildlife Habitat Appendix A Env Res Maps 1%2D20k 01": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B6%2D12 %2D Appendix 06 %2D ESA Appendix 6 %2D Environmental Noise Impact Assessment Part 3 of 3 %2D A4E7A5": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "Attach 11 %2D ESA %2D APPENDIX_A %2D A3X5F1": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B3%2D25 %2D Appendix J Restricted Activity Periods for Wildlife Occurring or Potentially Occurring in Local Study Area %2D A1X1Z2": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D2x Vol III %2D ESA %2D Part 5 A0Y1W0": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1U7A8 %2D 29 %2D ESA_REV1_Aug_2010_Part_8_of_23": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A0W0J7 %2D Environmental and Socio%2DEconomic Assessment": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A1Z5V7 %2D Cutbank%2DMusreau Area Expansion %2D ESA_Part 3 of 6": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A3I8F9 %2D Attachment 11 %2D ESA %2D Part 1 of 4": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "Attachment %2D ESA %2D 4 of 11 %2D A3V4G0": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A63951%2D15 V4 %2D ESA_Appendix D7 %2D A4D9J0": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A0R3W9 %2D SEACOR App D Phase I ESA %2D Stump Site Location Plan": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "B1%2D40 Appendix 10%2D2_TCPL_KNC_ESA_Appendix E %2D 5 %2D A4A2Q1": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A3J1D8 %2D 03 ESA Update Part 2 (Figures)": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A3F0G3 %2D Attachment 7b%2DESA Appendices Part 1 of 3": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D1k%2D  ESA Appendix C Wetland Assessment  (A1D5S1)": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A73674%2D7 Section_5%2DESA%2D2of2 %2D A4V0L8": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "B%2D2L %2D Soils Appendices   A0X2J1 ": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "B%2D3%2Dcc %2D %2D A0T2I6 %2D ESA%2DEA Viewshed Modelling Tech%2DVMA 2 Rept": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "A73674%2D8 Section_5%2DESA%2DAppA%2DEPP%2D1of2 %2D A4V0L9": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "Attachment %2D ESA %2D Appendix 2 of 2 %2D A3V4G9": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "B%2D6%2Dt %2D %2D A0T3H1 %2D ESA%2DEA Tech Reports %2D Vegetation Env Res Maps 1%2D20k 17": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A3J0J0 %2D ESA %2D Main Figures 1and2": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "B%2D2C Brunswick Pipeline SJ River EA_Part 2 of 5 (A1C4W2)": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "A88335%2D2 Appendix IR1A %2D Petrolia Phase I ESA %2D Part 1 of 5 %2D A5X8C6": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A2U8L6 %2D Appendix F %2D Alignment Sheets %2D 1 of 2": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D2oo %2D KXL ESA %2D Appendix A Part 9 of 14 %2D A1I9Y0 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A1U7D0 %2D 38 %2D ESA_REV1_Aug_2010_Part_17_of_23": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D01FF %2D Volume 4 %2D Environmental Assessment Report %2D Appendix B A0W9K0": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A1U2X2 %2D Cutbank River Lateral Loop (Bald Mountain) ESA_rev1_part_6_of_13": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D1%2Dee %2D ESA %2D soil observations and series description %2D Volume II %2D Appendix IX to ESA %2D ACCE  Application %2D A0X6A7  ": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A79036%2D13 13 Peace River Mainline Abandonment %2D Appendix 9 %2D ESA Attachment B ESIS 9 of 11 %2D A5E6A4": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D6%2Dz %2D %2D A0T3H7 %2D ESA%2DEA Tech Reports %2D Vegetation Env Res Maps 1%2D20k 023": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B35%2D41 %2D ESA_Update_September_30th_App_B_Part_18 %2D A2D7T8 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "ExternalPaperOnly_e (13)": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A89944%2D11 Section 10%2DAppendix 10%2D2%2DESA Part 2_Appendix_a %2D A6A2C9": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A1A0F7 %2D Appendix 5 Figure 4.3%2D12": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A1R5X3 %2D Appendix 4 %E2%80%93 ESA A5 Archaeological Impact Assessment": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D4%2Ds %2D %2D A0T2L5 %2D ESA%2DEA Geotechnical Rpts Appendix A Maps ERM TERRAIN 1%2D20k 13 ": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "Application to Deactivate Tank 207 Relief Line at Sarnia Terminal May 7 2015 APPENDIX 2 %2D A4L1J6": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A3K3F6 %2D CE2_Enbridge_ESA_Appendix5a": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "A0W5Y1 %2D ESA Appendix C": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A1W5R8 %2D ESA Phase 2 Part 4 of 4": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "B3%2D22 %2D Appendix 06 %2D ESA Appendix 12 %2D Decommissioning Environmental Technical Report Part 13 of 14 %2D A4E7F2": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D4k %2D Alignment Sheet %2D Manitoba 11  %2D A0X2L8": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A73674%2D17 Section_5%2DESA%2DAppB%2DSoil%2D1of7 %2D A4V0Q8": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A81915%2D2 Supplemental Environmental and Socio%2DEconomic Assessment %2D 3 (Part 1 of 2) %2D A5J1Q2": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A0W5Y2 %2D ESA Appendices D and E": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A81160%2D39 7178_eiccf6_am_035_mndetails_151111a %2D A5H8Q7": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A81755%2D6 Appendix 3 %2D ESA Memo %2D A5I8I4": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A98641%2D13 NCE_ESA_Sections6to9 %2D A6T2V8": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D2k %2D Redwillow ESA Section 6 Part 2 %2D A1C3W5": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A3I8H7 %2D Attachment 09B %2D ESA_Section5": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A78970%2D1 Letter to NEB re Supplemental ESA for the Line 10 Westover Segment Replacement Project %2D A5E4Z1": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A1H1R1 %2D ESA %2D Part 1 of 3": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B5%2D10 %2D V5A_ESA_02of16_BIOPHYSICAL %2D A3S1L4": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B36%2D8 %2D ESA_Update_September_30th_App_B_Part_35 %2D A2D7W6 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A3E0R7 %2D Line 2 Replacement ESA %2D 9 of 21": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "B%2D3%2Dw %2D %2D A0T2I0 %2D ESA%2DEA Grizzly and Black Bear Tech%2DBear 2": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "Appendix 3 %2D Environmental and Socio%2DEconomic Assessment (ESA) %2D A4U2D4": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B5%2D20 %2D Appendix 06 %2D ESA Appendix 2 %2D Environmental Alignment Sheet Package Part 06 of 18 %2D A4E6Y0": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A73674%2D29 Section_5%2DESA%2DAppD%2DInteractions_Table %2D A4V0S2": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D4f %2D Alignment Sheet %2D Manitoba 06  %2D A0X2L3": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A81456%2D2 Eyehill 13%2D20%2D040%2D28 W3M %2D Phase 1 ESA Report (SK) 12%2DDec%2D2016 %2D A5I3U2": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A1U7A6 %2D 26 %2D ESA_REV1_Aug_2010_Part_5_of_23": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B2%2D13 ESA_Appendix_E_Part4of5 ( A3Q6G9)": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B5%2D30 %2D Appendix 06 %2D ESA Appendix 2 %2D Environmental Alignment Sheet Package Part 16 of 18 %2D A4E6Z0": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A92619%2D19 19 ESA Appendices C to K %2D A6F4R2": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1K0D2 %2D Albright North Crossover %2D 5680 ESA Part 2 of 4": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A97195%2D3 ESA_Addendum_2019Jan10 %2D A6Q8W1": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A0T6S8 %2D Environmental Assessment": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B35%2D12 %2D ESA_Update_September_30th_Fish_Section_7(b) %2D A2D7Q9 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B1%2D12 %2D 03_1313340047_TCPL_CCP_ESA_FINAL_Sec5_Part2 %2D A3V4L0": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "Appendix 2 %2D ESA Figure %2D Husky Connection %2D A4J5Z5": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A74787%2D9 V2 %2D ESA_Amendment_Appendix_D_Part5 %2D A4W7Y9": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "ExternalPaperOnly_e (5)": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D2dd %2D KXL ESA %2D Section 17 Part 2 of 3 %2D A1I9W9": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A73674%2D22 Section_5%2DESA%2DAppB%2DSoil%2D6of7 %2D A4V0R3": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "B%2D02%2D32 %2D NGTL Horn River Project %2D ESA Appendix 6 TLU Report Part 2 of 11 %2D A1R8F9 ": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B5%2D17 %2D V5A_ESA_09of16_BIOPHYSICAL %2D A3S1Q6": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B%2D14s %2D Supplemental ESA 16 of 17 A1G4R1": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A0Y4C8 %2D Tera Environmental %2D ESA Impact Letter": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A90387%2D2 ESA Addendum Update %2D A6A8Q6": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A72401%2D35 V4 23 ESA Appendix G%2DPart 4 of 4 %2D A4T1C5": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A63951%2D33 V4 %2D ESA_Appendix J%2D3 %2D A4D9L1": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "A95098%2D1 Condition 60 ESA of Temporary Construction Lands and Infrastructure update Oct 2018 %2D A6J2W0": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B6%2D19 %2D Appendix 06 %2D ESA Appendix 7 %2D Aquatics Technical Report Part 7 of 7 %2D A4E7C2": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B3%2D19 %2D Appendix 06 %2D ESA Appendix 12 %2D Decommissioning Environmental Technical Report Part 10 of 14 %2D A4E7E9": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A0G0T3 %2D Environmental Assessment": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A0S5I7 %2D ESA %2D Figure 9.4(c) Changes in Land Use 1982": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "Attachment 08_02_ESA_FINAL_S6_Pt01 %2D A3W5Q6": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B8%2D30 %2D North_Montney_ESA_Appendix_H_REVISED %2D A3V1V7": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B1%2D13 %2D 04_1313340047_TCPL_CCP_ESA_FINAL_Sec6%2D11 %2D A3V4L1": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A97878%2D1 QAES Assessment %2D A6R9T5": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D2p %2D KXL ESA %2D Section 10 Part 12 of 15 %2D A1I9V5": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B6%2D07 %2D Appendix 06 %2D ESA Appendix 4 %2D Air Quality Assessment Part 3 of 4 %2D A4E7A0": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A1W4J5 %2D ESA Main Sections 7.8": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A0X4F4 %2D Environmental Assessment": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A2T3H3 %2D Section 9 %2D Appendix 9%2D1 ESA (Part 3 of 5)": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B%2D1e %2D ESA Report Section 4.0 Route and Facility Site Selection  (A1D5R5 )": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B8%2D24 %2D North_Montney_ESA_Sec 12 REVISED %2D A3V1V1": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "Attachment %2D ESA %2D Pre%2Dconstruction Planned Surveys %2D A3V4H1": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D7%2Dk %2D %2D A0T3J0 %2D ESA%2DEA Heritage Resources Rpt Appendix A %2D Env Res Map 1%2D20k 10": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D6%2Dk %2D %2D A0T3G2 %2D ESA%2DEA Tech Reports %2D Vegetation Env Res Maps 1%2D20k 08": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B3%2D24 %2D Appendix I  Detailed Wildlife Baseline Surveys Methods and Results Part 2 %2D A1X1Z1": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A2K5C7 %2D ESA Mica Creek Pipeline Project Appendix 5": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B%2D2k Vol II %2D ESA %2D Section 5 (Part 7) %2D ESE Setting A0Y1U7": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A2Q2X7 %2D Appendix 6 %2D ESA %2D Main Report": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A2I0L8 %2D ESA Appendix 6 Wildlife Sections 3.5 to Appendices": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B3%2D50_ESA_Appendix 12_13_HRA_Clearance_Summary_Stakeholder %2D A4K2W3": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B18%2D3 %2D Supplemental ESA %2D Part 2 %2D A3L4Z8": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A2S7S2 %2D MRPL Replacement ESA Appendix 1": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A98641%2D11 NCE_ESA_Sections1to4 %2D A6T2V6": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "ExternalPaperOnly_e (2)": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A0E6G7 %2D Volume 4 Env. Impact Assess. Part 1": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "B%2D8%2Dj %2D %2D A0T3Q0 %2D ESA%2DEA Wetlands Rpts Appendix G %2D Wetland Fish Habitat Env Res Map 1%2D20k 03": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1J4Z5 %2D ESA Appendix D %2D TLU Report": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "1402138_TCPL_SLL_ESA_APPENDIX_E%2DH_FINAL %2D A4J6E8": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A1S1X5 %2D Kearl_ESA_Appendix4_WildlifeHabitatAssessment_Mar10": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A1R5X8 %2D Appendix 4 %E2%80%93 ESA Part 2": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B18%2D11 %2D Supplemental ESA %2D Appendix 4c %2D Wetlands Evaluation %2D A3L5A6": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B%2D02%2D31 %2D NGTL Horn River Project %2D ESA Appendix 6 TLU Report Part 1 of 11 %2D A1R8F8 ": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "ExternalPaperOnly_e (15)": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A0R3A7 %2D Environmental Assessment": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "Attach 11 %2D ESA %2D Part 2 %2D A3X5F0": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B%2D8%2Daa %2D %2D A0T3R7 %2D ESA%2DEA Wetlands Rpts Appendix G %2D Wetland Fish Habitat Env Res Map 1%2D20k 020": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1S1X4 %2D Kearl_ESA_Appendix3_WetlandAssessment_Mar10": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A1U2X3 %2D Cutbank River Lateral Loop (Bald Mountain) ESA_rev1_part_7_of_13": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B3%2D19 %2D Appendix E Vegetation Data Summary Tables %2D A1X1Y6": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D9%2Da %2D %2D A0T3S3 %2D ESA%2DEA Wildlife and Wildlife Habitat Report Part 1 of 3": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A73897%2D16 16 Vaughan Mainline Expansion Project %2D ESA_AppC and D (7 of 9) %2D A4V3Q9": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A96233%2D5 Attachment NEB 3.1%2D3 McLeod_ESA_Part 2 %2D A6L2C4": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A1R2C5 %2D Appendix 6 %E2%80%93 ESA Part 3 of 9 sections 6 %E2%80%93 10": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A74508%2D11 Appendix 6.1 %2D ESA Part 9 of 10 %2D A4W2U6": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "A3H4X1 %2D Attachment 8A %2D ESA %2D Appendix D Part 10 of 10": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D1AI  %2D ESA %2D NWML_KomieExt_14_of_17  %2D A2F4Q2": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A88335%2D5 Appendix IR1A %2D Petrolia Phase I ESA %2D Part 4 of 5 %2D A5X8C9": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "Attachment 12i %2D ESA Appendix_D%2DG %2D A4F8K3": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A3E4S2 %2D ESA %2D Appendix A EPP %2D Main": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D6%2Ds %2D %2D A0T3H0 %2D ESA%2DEA Tech Reports %2D Vegetation Env Res Maps 1%2D20k 16": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A76613%2D6 Albersun Appendices Section 12_ESA %2D A4Z6H1": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B18%2D12 %2D Supplemental ESA %2D Appendix 4d %2D Wetlands Evaluation %2D A3L5A7": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B%2D02%2D26 %2D NGTL Horn River Project %2D ESA Appendix 4 Wildlife Report Part 2 of 3 %2D A1R8F3 ": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D02%2D18 %2D NGTL Horn River Project %2D ESA Appendix 2 Wetland Report Part 3 of 4 %2D A1R8E5 ": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "01 ESA MAIN Section01to05 %2D A4F2Z2": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A3F4K8 %2D SET_ESA_Part6_Appendix5": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "A85510%2D16 Appendix N %2D Golder Phase 1 ESA %2D A5T1Y4": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A3F8C6 %2D ESA Appendicies Part 6 of 10": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A75795%2D16 Appendix O %2D ESA Part 5 %2D A4Y5F1": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B%2D7%2Da %2D %2D A0T3I0 %2D ESA%2DEA Heritage Resources Report": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B35%2D4 %2D ESA_Update_September_30th_Route_%2D_Site_Selection_Section_2(b) %2D A2D7Q1 ": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B2%2D8 %2D Volume II %2D ESA %2D Appendix 1A %2D Pipeline Environmental Protection Plan %2D Pt 2 of 2 %2D A3E2Y3": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "B5%2D32 %2D Appendix 06 %2D ESA Appendix 2 %2D Environmental Alignment Sheet Package Part 18 of 18 %2D A4E6Z2": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A87481%2D8 Mastin Lake Phase 1 ESA Final %2D A5W5D0": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B2%2D16 ESA_Appendix_G_Part1of4 (A3Q6H2)": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A2H7D1 %2D Section 9 %2D ESA_Appendix 1_Ecological Land Classification": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D2a %2D Redwillow ESA Section 1 %2D A1C3V5": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D4c %2D Alignment Sheet %2D Manitoba 03  %2D A0X2L0": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A0S5I6 %2D ESA %2D Figure 9.4(b) Changes in Land Use 1979": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A73674%2D27 Section_5%2DESA%2DAppB%2DWildlife%2D2of2 %2D A4V0S0": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "A89944%2D17 Section 10%2DAppendix 10%2D2%2DESA Part 8_Appendix_g %2D A6A2D5": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "B36%2D3 %2D ESA_Update_September_30th_App_B_Part_30 %2D A2D7W1 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D2e %2D KXL ESA %2D Section 10 Part 1 of 15 %2D A1I9U4 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D02%2D7 %2D NGTL Horn River Project %2D ESA Cumulative Effects Assessment %2D A1R8D4 ": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A74788%2D3 V2 %2D ESA_Amendment_Appendix_D_Part20 %2D A4W8A5": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A1U7D4 %2D 42 %2D ESA_REV1_Aug_2010_Part_21_of_23": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D9%2D n %2D %2D A0T3T6 %2D ESA%2DEA Tech Rpts Wildlife and Wildlife Habitat Appendix A Env Res Maps 1%2D20k 07": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B3%2D38_ESA_Appendix_6A_Aquatics_TDR_Part3of4 %2D A4K2U4": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A1X7Q9 %2D ESA %2D Appendix 2 %2D Air": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B%2D4%2Da %2D %2D A0T2J7 %2D ESA%2DEA Tech Repts Geotechnical Geotech Report": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "B5%2D26 %2D Appendix 06 %2D ESA Appendix 2 %2D Environmental Alignment Sheet Package Part 12 of 18 %2D A4E6Y6": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1R5X1 %2D Appendix 4 %E2%80%93 ESA A3 2009 Rare Plant Survey": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "ExternalPaperOnly_e (11)": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "Attachment 13 %2D ESA Vol%2D1 %2D A3S6Q8": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "B3%2D18 %2D Vol 6C %2D Human Environment ESA (Part 3 of 3) %2D A1T0G8 ": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "A0T7Y3 %2D Bear Head Pipeline Project %2D Environmental Assessment Scoping Document": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A88327%2D3 Appendix IR1B %2D Chinook%2DLoomis Phase I ESA %2D A5X7Z4": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D3v %2D Alignment Sheet %2D Alberta 22  %2D A0X2S9": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B5%2D17 %2D Appendix 06 %2D ESA Appendix 2 %2D Environmental Alignment Sheet Package Part 03 of 18 %2D A4E6X7": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1W6X0 %2D ESA 3 of 3": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A0R4A8 %2D Sec 6 SectionI Stump ESA_rep": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D8%2Du %2D %2D A0T3R1 %2D ESA%2DEA Wetlands Rpts Appendix G %2D Wetland Fish Habitat Env Res Map 1%2D20k 014": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A72401%2D17 V4 05 ESA Appendix B%2DEAS Sheets 17%2D22%2DPart 4 of 6 %2D A4T0Z7": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D7%2D e %2D %2D A0T3I4 %2D ESA%2DEA Heritage Resources Rpt Appendix A %2D Env Res Map 1%2D20k 04": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A3D8K0 %2D ESA Appendix III to VIII": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "Hallum Pipeline Phase I ESA (600%2D221 R01)": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A72401%2D34 V4 22 ESA Appendix G%2DPart 3 of 4 %2D A4T1C4": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D4%2Db %2D %2D A0T2J8 %2D ESA%2DEA Geotechnical Rpts Appendix A %2D ERM TERRAIN 1%2D20k 00 INDEX rev0": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D3%2Dt %2D %2D A0T2H7 %2D ESA%2DEA Forest Health Tech%2DForest": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "Attachment 13 %2D ESA Vol%2D5 %2D A3S6R2": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A3E4S6 %2D ESA Appendix B %2D Air %2D App B and C": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A74788%2D15 V2 %2D ESA_Amendment_Appendix_D_Part32 %2D A4W8C9": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "B%2D2j %2D KXL ESA %2D Section 10 Part 6 of 15 %2D A1I9U9": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A1U7D2 %2D 40 %2D ESA_REV1_Aug_2010_Part_19_of_23": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1X5G9 %2D ESA Appendix 1 (2 of 2)": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A74787%2D10 V2 %2D ESA_Amendment_Appendix_D_Part6 %2D A4W7Z0": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "B%2D3%2Dm %2D %2D A0T2H0 %2D ESA%2DEA Fish Atlas Proposed 1 of 4": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B2%2D11_ESA_Main_Sec_1_to_5_Part11of12 %2D A4K2R6": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A92619%2D12 12 ESA Sections 9 to 10 %2D A6F4Q5": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "B%2D11bb %2D Alignment Sheet %2D Manitoba 09 (A0Y0T8 )": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D2h %2D Part 2 %2D Air Appendices %2D A0X2I7 ": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B2%2D31 %2D Volume IIA %2D ESA %2D Appendix 8 %2D Vegetation Survey %2D A3E3A6": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A81524%2D33 ESA%2D Appendix C%2D Aboriginal Consultation Records %2D A5I4X7": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B2%2D14_ESA_Main_Sec_7_Part1of1 %2D A4K2R9": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A3H4X7 %2D Attachment 8A %2D ESA %2D Appendix G Part 5 of 7": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A1G8F0 %2D Environmental Assessment": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D2rr %2D KXL ESA %2D Appendix A Part 12 of 14 %2D A1I9Y3": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B1%2D21%2D Appendix 10 ESA %2D Appendix A %2D A1T0Y8 ": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B%2D2t %2D Land Use  A0X2J9": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A2T5X4 %2D Laurier ReRoute ESA %2D Part 2": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "B36%2D20 %2D ESA_Update_September_30th_App_C_Part_9 %2D A2D7X8 ": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A3F6X0 %2D Line 3 Replacement Project ESA %2D Part 13 of 16": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A1C0S6 %2D 11 Vol II ESA Attachment A Part 2": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "B%2D6%2Daa %2D %2D A0T3H8 %2D ESA%2DEA Tech Reports %2D Vegetation Env Res Maps 1%2D20k 24": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "rpt_20140703_ESA_MP133.08_swc_JB%2DAB%2DFinal %2D A3Z1F3": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "06_ESA_FINAL_Appendix02_pt3of3 %2D A4C2U4": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A0F7D8 %2D Appendix 3 %2D Moyie Preliminary EA": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "B2%2D3 %2D Vantage Pipeline Project Vol II ESA Section 1(b) %2D A1X5W8": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A0R4C2 %2D Sec 6 SectionM Hope ESA_rep": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A1R5W7 %2D Appendix 4 %E2%80%93 ESA A1 Aquatic Habitat Part 1": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D2BB Volume III %2D ESA %2D Align Sheets (Part 11) (A0Z1C3)": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "Appendix 5 %2D ESA %2D Project EPP %2D A3R5E6": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A73674%2D11 Section_5%2DESA%2DAppB%2DAcoustic %2D A4V0Q2": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "A1V2D8 %2D Cutbank Supplemental Rare Plant Survey Part 2 of 2": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A0U4C5 %2D NEB %2D Section 58 Application %2D Section 9 ESA Part 2": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D11z %2D Alignment Sheet %2D Manitoba 07 (A0Y0T6 )": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A98624%2D19 18 EDML_ESA_Appendix F_SAR_and_SOMC %2D A6T2H1": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A3F4L0 %2D SET_ESA_Part8_Appendices7to9": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A87033%2D32 ESA_App_F_Vegetation_and_Wetlands %2D A5V8G2": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A2K2F0 %2D Appendix 2 %2D ESA Appendix B Part 1 of 3": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A3J1D7 %2D 02 ESA Update Part 1 (Section 1.0)": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D8%2Dx %2D %2D A0T3R4 %2D ESA%2DEA Wetlands Rpts Appendix G %2D Wetland Fish Habitat Env Res Map 1%2D20k 017": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A0R3X1 %2D SEACOR App E Phase I ESA %2D Juliet 1 Site Location Plan": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "A1W6X5 %2D ESA Appendix 3 (1 of 2)": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "Section_5%2DESA%2DAppB%2DGHG_Soils%2D1of3 %2D A4U3X0": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "B36%2D1 %2D ESA_Update_September_30th_App_B_Part_28 %2D A2D7V9 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A80172%2D5 Section 4 %2D ESA 2of2 %2D A5G2W9": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "B%2D02%2D10 %2D NGTL Horn River Project %2D ESA Conclusion %2D A1R8D7 ": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A0L5S5 %2D ESA Part 2B": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B1%2D26 %2D 17_1313340047_TCPL_CCP_ESA_FINAL_AppD_Part7 %2D A3V4Q4": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D2d Vol II %2D ESA %2D Section 4 %2D Routing A0Y1U0": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B2%2D12 %2D Vantage Pipeline Project Vol II ESA Section 10(a) %2D A1X5X7": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B2%2D1 %2D Vantage Pipeline Project Vol II ESA Table of Contents %2D A1X5W6": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B5%2D13 %2D V5A_ESA_05of16_BIOPHYSICAL %2D A3S1L7": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "Attachment 08_01_ESA_FINAL_S1toS5 %2D A3W5Q5": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A1Y7Z2 %2D ESA Report Appendix G List of Plant Species": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A85199%2D2 2017.07.28_S.58_Post Order Compliance_Condition 4 ESA Addendum %2D A5S6J4": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A1R5X9 %2D Appendix 4 %E2%80%93 ESA A8 Interaction and Detailed Analysis Tables": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A98624%2D22 21 EDML_ESA_Appendix_G_Aquatic_Resources_Part C %2D A6T2H4": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A1U2X5 %2D Cutbank River Lateral Loop (Bald Mountain) ESA_rev1_part_9_of_13": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D2g %2D Redwillow ESA Section 5 Part 2 %2D A1C3W1 ": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B6%2D08 %2D Appendix 06 %2D ESA Appendix 4 %2D Air Quality Assessment Part 4 of 4 %2D A4E7A1": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B%2D1q  %2D ESA Appendix H Alignment Sheets Part 1 of 3 %2D Sheets 1 to 8 (A1D5S7)": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D2a Vol II %2D ESA %2D Section 1 %2D Executive Summary and Introduction A0Y1T7": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B3%2D02 %2D Appendix 06 %2D ESA Appendix 9 %2D Vegetation Technical Report Part 2 of 5 %2D A4E7D2": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D01T %2D Volume 4 %2D Environmental Assessment Report %2D Project Description A0W9I8 ": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "A1D3I8 %2D Archaeological Impact Assessment %2D Permit 2002%2D202 %2D plates 1 %2D 2": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B2%2D17 %2D Volume II %2D ESA %2D Appendix 2 %2D Environmental Alignment Sheet Package %2D Map 66 to 70  %2D Pt 8 of 8 %2D A3E2Z2": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D1%2Dy %2D ESA %2D Consultation Report %2D Volume II %2D Appendix III to ESA %2D ACCE Application %2D A0X6A1": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A1D2W5 %2D ESA for Red Deer River Re%2Droute %2D Part 2 of 3": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D7%2Di %2D %2D A0T3I8 %2D ESA%2DEA Heritage Resources Rpt Appendix A %2D Env Res Map 1%2D20k 08": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A0S5J1 %2D ESA %2D Appendix A9.2 Archeological Impact Assessment": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1R5W9 %2D Appendix 4 %E2%80%93 ESA A1 Aquatic Habitat Part 3": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D9%2Db %2D %2D A0T3S4 %2D ESA%2DEA Wildlife and Wildlife Habitat Report Part 2 of 3": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B5%2D29 %2D Appendix 06 %2D ESA Appendix 2 %2D Environmental Alignment Sheet Package Part 15 of 18 %2D A4E6Y9": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D2N Volume II %2D ESA %2D Section 9 %2DSupplemental Studies (A0Z0Z9)": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "Section_5%2DESA%2DAppB%2DAcoustic%2DAir_Qual %2D A4U3W8": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B3%2D34 %2D Vol 8B %2D Marine Transportation ESA (Part 9 of 11) %2D A1T0I4 ": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "A90753%2D23 Snowfall Creek Receipt MS Phase 1 ESA %2D Final %2D A6C4X4": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B35%2D3 %2D ESA_Update_September_30th_Route_%2D_Site_Selection_Section_2(a) %2D A2D7Q0 ": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A0R0Z1 %2D Environmental and Socio%2DEconomic Assessment": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B5%2D24 %2D V5A_ESA_16of16_BIOPHYSICAL %2D A3S1R3": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D4%2Dh %2D %2D A0T2K4 %2D ESA%2DEA Geotechnical Rpts Appendix A Maps ERM TERRAIN 1%2D20k 02 ": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D02%2D3 %2D NGTL Horn River Project %2D ESA Consultation %2D A1R8D0 ": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1R2C4 %2D Appendix 6 %E2%80%93 ESA Part 1 of 9 sections 1 %E2%80%93 3": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A3I8G1 %2D Attachment 11 %2D ESA %2D Part 3 of 4": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A1D3J0 %2D Archaeological Impact Assessment %2D Permit 2007%2D344": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A80172%2D15 Section 4 %2D ESA %2D AppB4 %2D Wildlife 2of2 %2D A5G2X9": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D9%2Dt %2D %2D A0T3U2 %2D ESA%2DEA Tech Rpts Wildlife and Wildlife Habitat Appendix A Env Res Maps 1%2D20k 13": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B5%2D07 %2D Appendix 06 %2D ESA Part 07 of 10 %2D A4E6W7": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "09_ESA_FINAL_Appendix04 %2D A4C2U7": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A63951%2D23 V4 %2D ESA_Appendix D15  %2D A4D9J8": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A92619%2D15 15 ESA Sections 17 to 26 %2D A6F4Q8": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A3F8C2 %2D ESA Appendicies Part 2 of 10": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1C0S7 %2D 12 Vol II ESA Attachment A Part 2": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "B%2D02B %2D Supplemental Filing %2D Vol II %2D ESA %2D Appendix III %2D Economic Effects A0Z7E4 ": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A82979%2D2 Enbridge Response to NEB IR No. 1 %2D Supplemental ESA %2D 3 %2D A5K9J6": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A89944%2D15 Section 10%2DAppendix 10%2D2%2DESA Part 6_Appendix_e %2D A6A2D3": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D3%2Dx %2D %2D A0T2I1 %2D ESA%2DEA Noise Tech Rpt Noise 1": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "Attachment %2D ESA %2D 7 of 11 %2D A3V4G3": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D2o %2D Hydrogeology  A0X2J4 ": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "B%2D4%2Dl %2D %2D A0T2K8 %2D ESA%2DEA Geotechnical Rpts Appendix A Maps ERM TERRAIN 1%2D20k 06": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A84069%2D1 Letter to NEB re Condition 8 to Order XO%2DE101%2D001%2D2017 and Updated ESA %2D A5Q6R1": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D02%2D4 %2D NGTL Horn River Project %2D ESA Routing and Siting %2D A1R8D1 ": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D6%2Do %2D %2D A0T3G6 %2D ESA%2DEA Tech Reports %2D Vegetation Env Res Maps 1%2D20k 12": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1D2W7 %2D ESA for South Saskatchewan River Re%2Droute": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B3%2D3 %2D Appendix C Soil_Vegetation and Wetlands Baseline Figures C1%2D5 Part 1 %2D A1X1X0": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B5%2D04 %2D Appendix 06 %2D ESA Part 04 of 10 %2D A4E6W4": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D4%2Dk %2D %2D A0T2K7 %2D ESA%2DEA Geotechnical Rpts Appendix A Maps ERM TERRAIN 1%2D20k 05": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1Z9F2 %2D Cheecham %2D Kettle River Area Expansion %2D Sec 58 ESA Section 5 to 6 June 2011": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "G%2D1%2Da %2D%2D A0S7G4 %2D Project Description of the proposed Brunswick Pipeline Project": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A2A7I0 %2D Environmental Assessment": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A74788%2D8 V2 %2D ESA_Amendment_Appendix_D_Part25 %2D A4W8C0": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A1A0G8 %2D Appendix 5 Figure 4.4%2D4": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "B8%2D26 %2D North_Montney_ESA_Sec 15 REVISED %2D A3V1V3": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "Attachment %2D ESA %2D 3 of 11 %2D A3V4H2": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D2u %2D KXL ESA %2D Section 11 Part 2 of 2 %2D A1I9W0": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A2H7C9 %2D Section 9 %2D Appendix 9%2D2 %2D ESA_Section_6": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A3G6W0 %2D Attach 07a %2D ESA": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D1p %2D  ESA Appendix G Environmental Protection Plan (A1D5S6 )": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "Attachment %2D ESA %2D 10 of 11 %2D A3V4G6": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "Environmental Assessment (A0D1K9)": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B2%2D2  Volume 4 %2D ESA_Main_Part_1_of_5 (A3Q6F8)": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A0R6L6 %2D ESA  Appendicies A and B": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A63951%2D10 V4 %2D ESA_Appendix D2 %2D A4D9I5": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "B%2D2B Volume II %2D ESA %2D Section 2 %2D Project Description (A0Z0Y7)": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A0R4C0 %2D Sec 6 SectionK Kingsvale ESA_rep": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A18%2D22 %2D Supplemental ESA %2D Appendix 9 %2D Environmental Alignment Sheet Package %2D A3L5C7 ": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D2p %2D Fisheries  A0X2J5 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A1X9F3 %2D ESA Appendix 2": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D12a %2D ESA Section 18 %2D Page 3%2D3 (A0Y0V3 )": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A96233%2D8 Attachment NEB 3.1%2D3 McLeod_ESA_Part 5 %2D A6L2C7": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "04 ESA MAIN Section06_Part3of3 %2D A4F2Z5": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B5%2D21 %2D Appendix 06 %2D ESA Appendix 2 %2D Environmental Alignment Sheet Package Part 07 of 18 %2D A4E6Y1": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B1%2D17 %2D V3A_APPB_01_OF_03_PH_3_ESA_WORKSHOP %2D A3S0S3": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A0F9Q1 %2D Environmental Assessment": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D4n %2D Alignment Sheet %2D Manitoba 14  %2D A0X2Q1": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B3%2D14 %2D Appendix 06 %2D ESA Appendix 12 %2D Decommissioning Environmental Technical Report Part 05 of 14 %2D A4E7E4": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D14q %2D Supplemental ESA 14 of 17 A1G4Q9": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D2bb %2D KXL ESA %2D Section 14 to 16 %2D A1I9W7 ": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A1K0U2 %2D Environmental Assessment": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A98624%2D13 12 EDML_ESA_PART_D %2D A6T2G5": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "B2%2D9 %2D ESA Section 5 Baseline Part 6 %2D A1X1V3": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A99944%2D7 110903565RE%2DAPL0001_Part 4 %2D ESA Rev 1 %2D A6V2E2": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B3%2D05 %2D Appendix 06 %2D ESA Appendix 9 %2D Vegetation Technical Report Part 5 of 5 %2D A4E7D5": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A3K3F7 %2D CE2_Enbridge_ESA_Appendix5b": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "B6%2D23 %2D Appendix 06 %2D ESA Appendix 8 %2D Wetland Technical Report Part 4 of 7 %2D A4E7C6": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A88335%2D4 Appendix IR1A %2D Petrolia Phase I ESA %2D Part 3 of 5 %2D A5X8C8": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "B6%2D01 %2D Appendix 06 %2D ESA Appendix 3A %2D Pipeline Soil Survey Part 1 of 2 %2D A4E6Z4": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A89944%2D9 Section 10%2DAppendix 10%2D1_Interactions Table %2D A6A2C7": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A1D3J4 %2D Archaeological Impact Assessment %2D Permit 2007%2D344 %2D Figure 4 Project detail": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A3F4L1 %2D SET_ESA_NEB_Interactions_Table_Feb2013": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A75795%2D15 Appendix N %2D ESA Part 4 %2D A4Y5F0": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B6%2D21 %2D Appendix 06 %2D ESA Appendix 8 %2D Wetland Technical Report Part 2 of 7 %2D A4E7C4": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A1W6X8 %2D ESA Appendix 4 (2 of 2)": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A2S7S8 %2D MRPL Replacement ESA Appendix 7": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A0Z9I3 %2D Environmental Assessment": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "ExternalPaperOnly_e (3)": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A1G2U2 %2D 2008 Interim Manitoba Heritage Resources Impact Assessment %2D Alberta Clipper": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D02%2D15 %2D NGTL Horn River Project %2D ESA Appendix 1 Aquatic Report Part 5 of 5 %2D A1R8E2 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A0U4C4 %2D NEB %2D Section 58 Application %2D Section 9 ESA Part 1": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A0W6A2 %2D Environmental Protection Plan": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D8%2Db %2D %2D A0T3L2 %2D ESA%2DEA Wetlands Report Part 2": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A98941%2D1 Nova Gas Transmission 2021 Tech Review of Environmental and Socio%2Deconomic Assessment  %2D A6T6Z0": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B35%2D16 %2D ESA_Update_September_30th_Wildlife_Section_9(a) %2D A2D7R3 ": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A3I8H9 %2D Attachment 09D %2D ESA_AppA%2DB_EPP_EAS": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D1%2Dw %2D ESA %2D Conceptual drawings of ACCE project components %2D Volume II %2D Appendix I to ESA %2D ACCE Application %2D A0X5Z9  ": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "B2%2D11  ESA_Appendix_E_Part 2of 5 (A3Q6G7)": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A98624%2D18 17 EDML_ESA_Appendix E_Soil_Capability %2D A6T2H0": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A1Z9F0 %2D Cheecham %2D Kettle River Area Expansion %2D Sec 58 ESA Section 1 to 3 June 2011": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A72401%2D27 V4 15 ESA Appendix F%2DPart 1 of 5 %2D A4T1A7": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D2uu %2D KXL ESA %2D Appendices B to D %2D A1I9Y6": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D1%2Do  %2D %2D A0T2D0 %2D Section 6 %2D ESA including by reference EA Report and Vol. II%2DIV filed separately  ": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B24 %2D Witness Panel and Responsibilities for Cross Examination on ESA %2D A3Q0L6": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A2T3H1 %2D Section 9 %2D Appendix 9%2D1 ESA (Part 1 of 5)": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A92619%2D18 18 ESA Appendix B EAS%2DPart B %2D A6F4R1": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A98641%2D17 NCE_ESA_Appendices3to5 %2D A6T2W4": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A3E0S3 %2D Line 2 Replacement ESA %2D 15 of 21": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A2A6W1 %2D 2012 Eastern Mainline Expansion ESA_part 3 of 3": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D2u Vol III %2D ESA %2D Part 2 A0Y1V7": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B8%2D28 %2D North_Montney_ESA_Sec_18 REVISED %2D A3V1V5": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B%2D3jj %2D Alignment Sheet %2D Alberta 36  %2D A0X2U3": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A0Q3T1 %2D Appendix 8 Environmental Assessment": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A98624%2D23 22 EDML_ESA_Appendix_H_Human Occupany %2D A6T2H5": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A0W4J1 %2D Environmental Assessment": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D5%2De %2D %2DA0T3C6 %2D ESA%2DEA Tech Rpts Soils Appendix G Env Res Maps ERM SOILS 1%2D20k 00 Legend rev0": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "17 ESA Appendix05_Part2of2 %2D A4F3A8": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A1V2D6 %2D 2010%2D10%2D12 %2D ESA Supplemental Rare Plants Survey %2D Cutbank River Lateral Loop (Bald Mountain Section)": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "Section_5%2DESA%2DAppB%2DSoils%2D2of3 %2D A4U3X1": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "A87033%2D23 ESA_App_B%2D2_AQ_Tech_CSN5_Part1_of_3 %2D A5V8F3": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B2%2D12 %2D ESA Section 5 Baseline Part 9 %2D A1X1V6": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A74787%2D21 V2 %2D ESA_Amendment_Appendix_D_Part17 %2D A4W8A1": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A90753%2D17 Manir Receipt MS Phase 1 ESA %2D Final %2D A6C4W8": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D1o %2D ESA Appendix F Arch Part 2 of 2  %2D Traditional Land Use Sites Assessment (A1D5S5 )": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A0W0A5 %2D Environmental Assessment": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B1%2D21 %2D ESA Appendix B Part 1 of 2 %2D A2A6Q7": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A0L7Z9 %2D ESA %2D Appendix 2 %2D Photoplates": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A3H4V6 %2D Attachment 8A %2D ESA Part 1 of 2": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A79008%2D7 Attachment 5 %2D ESA %2D A5E5S0": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D1k  %2D Groundbirch ESA_NEB_8of14 (A1J6J0)": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B%2D01GG %2D Volume 4 %2D Environmental Assessment Report %2D Appendix C A0W9K1": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D4%2Dg %2D %2D A0T2K3 %2D ESA%2DEA Geotechnical Rpts Appendix A Maps ERM TERRAIN 1%2D20k 01 ": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1U2X9 %2D Cutbank River Lateral Loop (Bald Mountain) ESA_rev1_part_13_of_13": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A1S7I7 %2D Environmental Screening Report pursuant to CEA Act": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A0R6L7 %2D ESA Appendicies C and D": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B3%2D9 %2D Appendix C Soil_Vegetation and Wetlands Baseline Figures C38%2D45 Part 7 %2D A1X1X6": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "1402138_TCPL_SLL_ESA_APPENDIX_B_Part3_FINAL %2D A4J6E5": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "A79106%2D2 Eastern Mainline Project %2D ESA Update Report %2D Part 1 of 2 %2D A5E7A3": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A96233%2D6 Attachment NEB 3.1%2D3 McLeod_ESA_Part 3 %2D A6L2C5": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A0R4C5 %2D Sec 6_Pump Station ESA": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A94156%2D2 2021 NGTL SXP %2D ESA Update %2D Bridging Document %2D Supplemental Studies Report %2D A6H7R6": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D14i %2D Supplemental ESA 6 of 17 A1G4Q1": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B%2D3%2Dy %2D %2D A0T2I2 %2D ESA%2DEA Noise Tech Rpt Noise 2": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "B6%2D24 %2D Appendix 06 %2D ESA Appendix 8 %2D Wetland Technical Report Part 5 of 7 %2D A4E7C7": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A3F6W2 %2D Line 3 Replacement Project ESA %2D Part 5 of 16": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A92619%2D11 11 ESA Sections 5 to 8 %2D A6F4Q4": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "B%2D12d %2D ESA Section 18 %2D Pages 7%2D21 to 7%2D28 (A0Y0V6 )": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D5%2Dm %2D %2D A0T3D4 %2D ESA%2DEA Tech Rpts Soils Appendix G Env Res Maps ERM SOILS 1%2D20k 08": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D2g %2D Part 1 %2D Air Appendices  A0X2I6 ": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A1K6J6 %2D 2009%2D07%2D22 %2D NGTL Response to EC Comments on ESA %2D Albright North Crossover": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B1%2D15 %2D 06_1313340047_TCPL_CCP_ESA_FINAL_AppB_Part1 %2D A3V4L3": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D11hh %2D Alignment Sheet %2D Manitoba 15 (A0Y0U4 )": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1W4K6 %2D ESA Appendix E N4 Loop Wildlife": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B6%2D18 %2D Appendix 06 %2D ESA Appendix 7 %2D Aquatics Technical Report Part 6 of 7 %2D A4E7C1": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D4%2Dp %2D %2D  A0T2L2 %2D ESA%2DEA Geotechnical Rpts Appendix A Maps ERM TERRAIN 1%2D20k 10 ": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1R2D3 %2D Appendix 6 %E2%80%93 ESA Part 2B of 9 sections 5": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A98641%2D18 NCE_ESA_Appendices6to9 %2D A6T2W5": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A80172%2D17 Section 4 %2D ESA %2D AppD %2D Interactions Table %2D A5G2Y1": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A3I8G2 %2D Attachment 11 %2D ESA %2D Part 4 of 4": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A73674%2D15 Section_5%2DESA%2DAppB%2DFisheries%2D2of2 %2D A4V0Q6": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A0R4A9 %2D Sec 6 SectionJ Merritt ESA_rep": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A2T6Y9 %2D Attachment 10c %2D ESA Appendices C and D": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A89944%2D10 Section 10%2DAppendix 10%2D2%2DESA Part 1 %2D A6A2C8": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A1X8Y2 %2D Appendix 14 ESA Karr North": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D7%2Dt %2D %2D A0T3J9 %2D ESA%2DEA Heritage Resources Rpt Appendix A %2D Env Res Map 1%2D20k 019": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1A0G9 %2D Appendix 5 Figure 4.4%2D5": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "A87033%2D26 ESA_App_B%2D4_Chetwynd_GHG_Tech %2D A5V8F6": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B%2D4%2Dm %2D %2D A0T2K9 %2D ESA%2DEA Geotechnical Rpts Appendix A Maps ERM TERRAIN 1%2D20k 07": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B6%2D20 %2D Appendix 06 %2D ESA Appendix 8 %2D Wetland Technical Report Part 1 of 7 %2D A4E7C3": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B5%2D06 %2D Appendix 06 %2D ESA Part 06 of 10 %2D A4E6W6": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A74788%2D20 V2 %2D ESA_Amendment_Appendix_E%2DK %2D A4W8E1": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "B%2D2b %2D KXL ESA %2D Section 1 to 7 %2D A1I9U1": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D6%2De %2D %2D A0T3F6 %2D ESA%2DEA Tech Reports %2D Vegetation Env Res Maps 1%2D20k 02": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B36%2D19 %2D ESA_Update_September_30th_App_C_Part_8 %2D A2D7X7 ": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A2K5C4 %2D ESA Mica Creek Pipeline Project S1 to S6": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B5%2D23 %2D Appendix 06 %2D ESA Appendix 2 %2D Environmental Alignment Sheet Package Part 09 of 18 %2D A4E6Y3": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B3%2D26 %2D Appendix K Wildlife_Wildlife Habitat_Vegetation Species At Risk Summary %2D A1X1Z3": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B3%2D16 %2D Appendix C Soil_Vegetation and Wetlands Baseline Figures C82%2D86 Part 14 %2D A1X1Y3": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1Y7Y9 %2D ESA Report Appendix D Part 2 %2D Previous Reports": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B5%2D9 %2D V5A_ESA_01of16_BIOPHYSICAL %2D A3S1L3": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A1Z9E8 %2D Cheecham %2D Kettle River Area Expansion %2D Sec 58 ESA Appendices June 2011 1 o 2": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B35%2D22 %2D ESA_Update_September_30th_App_A_Part_1 %2D A2D7R9 ": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "A3J0J2 %2D ESA %2D Technical Report and Figure1 to 5": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B1%2D18 %2D V3A_APPB_02_OF_03_PH_3_ESA_WORKSHOP %2D A3S0S4": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "B5%2D03 %2D Appendix 06 %2D ESA Part 03 of 10 %2D A4E6W3": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "09 ESA Appendix02_Part1of2 %2D A4F3A0": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B3%2D29_ESA_Appendix_2_Alignment_Sheets_Part5of5 %2D A4K2T5": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "A1J4Z1 %2D ESA Appendix E %2D Environmental Protection Plan": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D2v %2D Socio%2DEconomics %2D Part 2  A0X2K1": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A0L5T1 %2D ESA Part 5A": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "Attachment C%2DMatrix Phase 1 ESA_11%2D36%2D011%2D01W4M to 08%2D02%2D012%2D30W3M_July 2015 %2D A4S9Y3": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A74788%2D13 V2 %2D ESA_Amendment_Appendix_D_Part30 %2D A4W8C5": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "Attachment 12f %2D ESA Appendix_C_Part_1of3 %2D A4F8K0": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "Appendix 5 %2D ESA %2D Interactions Table %2D A3T1K1": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A3F6W4 %2D Line 3 Replacement Project ESA %2D Part 7 of 16": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D5%2Dcc %2D %2D A0T3F0 %2D ESA%2DEA Tech Rpts Soils Appendix G Env Res Maps SOILS 1%2D20k 024": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A74787%2D18 V2 %2D ESA_Amendment_Appendix_D_Part14 %2D A4W7Z8": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "B%2D11ee %2D Alignment Sheet %2D Manitoba 12 ( A0Y0U1 )": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1A0G5 %2D Appendix 5 Figure 4.4%2D1": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A2S7S5 %2D MRPL Replacement ESA Appendices 4a and 4b": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A74788%2D9 V2 %2D ESA_Amendment_Appendix_D_Part26 %2D A4W8C1": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "B%2D1%2Dcc %2D ESA %2D Aquatic habitat summary %2D Volume II %2D Appendix VII to ESA %2D ACCE Application %2D A0X6A5": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B35%2D50 %2D ESA_Update_September_30th_App_B_Part_27 %2D A2D7U7 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A3F6W5 %2D Line 3 Replacement Project ESA %2D Part 8 of 16": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "Attachment 12d %2D ESA Appendix_B_Part_1of2 %2D A4F8J8": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A1W6W8 %2D ESA 1 of 3": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A1J5A2 %2D ESA Appendix D %2D AIA 7 of 8": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1A0E5 %2D Appendix 5 Figure 1%2D1": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "B%2D7%2Dq %2D %2D A0T3J6 %2D ESA%2DEA Heritage Resources Rpt Appendix A %2D Env Res Map 1%2D20k 016": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1K4L2 %2D APPENDIX 7 %2D ESA Part 5": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "A0Y4W1 %2D National Energy Board Environmental Assessment Report %2D Brunswick Pipeline Project": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A1S1X3 %2D Kearl_ESA_Appendix2_AquaticsAssessment_Mar10": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D01NN %2D Volume 4 %2D Environmental Assessment Report %2D Appendix I A0W9K7": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "B%2D1AK  %2D ESA %2D NWML_KomieExt_16_of_17  %2D A2F4Q4": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A1A0H4 %2D Environmental Assessment": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A81456%2D3 Eyehill 16%2D24%2D040%2D01 W4M %2D Phase 1 ESA Report (AB) 15%2DDec%2D2016 %2D A5I3U3": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B3%2D42_ESA_Appendix_7_Wetlands_TDR_Part2of2 %2D A4K2V5": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B36%2D6 %2D ESA_Update_September_30th_App_B_Part_33 %2D A2D7W4 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B18%2D2 %2D Supplemental ESA %2D Part 1 %2D A3L4Z7": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D11j %2D Alignment Sheet %2D Alberta 23 (A0Y0S0)": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D11jj %2D Alignment Sheet %2D Manitoba 17 (A0Y0U6 )": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A0R2J2 %2D Environmental and Socio%2DEconomic Assessment": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A0E6H0 %2D Volume 4 Env. Impact Assess. Part 4": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "A74508%2D5 Appendix 6.1 %2D ESA Part 3 of 10 %2D A4W2S3": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "B%2D2w Vol III %2D ESA %2D Part 4 A0Y1V9": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A73897%2D12 12 Vaughan Mainline Expansion Project %2D ESA_Sec 5_8 to 5_23_(3 of 9) %2D A4V3Q5": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "B%2D7%2Df %2D %2D A0T3I5 %2D ESA%2DEA Heritage Resources Rpt Appendix A %2D Env Res Map 1%2D20k 05": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "Attachment 08_03_ESA_FINAL_S6_Pt02 %2D A3W5Q7": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A1W4J2 %2D ESA Main Sections 6.4": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A1J4Z0 %2D ESA Appendix C %2D Winter Wildlife Study": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A2S7S4 %2D MRPL Replacement ESA Appendix 3": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A98624%2D15 14 EDML_ESA_Appendix B_Environmental Alignment Sheets %2D A6T2G7": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1X5G8 %2D ESA Appendix 1 (1 of 2)": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D6%2Dn %2D %2D A0T3G5 %2D ESA%2DEA Tech Reports %2D Vegetation Env Res Maps 1%2D20k 11": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A0S4E1 %2D Environmental Assessment Executive Summary and Table of Contents": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B1%2D30 %2D 21_1313340047_TCPL_CCP_ESA_FINAL_AppD_Part11 %2D A3V4Q8": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D3%2Di %2D %2D A0T2G6 %2D ESA%2DEA Fish Atlas Existing 3 of 5": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D2g %2D KXL ESA %2D Section 10 Part 3 of 15 %2D A1I9U6": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D11L %2D Alignment Sheet %2D Alberta 26 (A0Y0S2 )": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D4i %2D Alignment Sheet %2D Manitoba 09  %2D A0X2L6": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A0K9K3 %2D Draft Environmental Assessment Scoping Document": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A%2D3 %2D%2D A0U6J7 %2D Environmental Assessment Scoping Document": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D1%2Ddd %2D ESA %2D Alignment sheets %2D Volume II %2D Appendix VIII to ESA %2D ACCE Application %2D A0X6A6 ": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D11u  %2D Alignment Sheet %2D Manitoba 02  (A0Y0T1)": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B3%2D26 %2D Vol 8B %2D Marine Transportation ESA (Part 1 of 11) %2D A1T0H6 ": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "A90753%2D24 Squirrel Mountain Receipt MS Phase 1 ESA %2D Final %2D A6C4X5": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D2x %2D Effect of the Environment   A0X2K3 ": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B3%2D13 %2D Appendix 06 %2D ESA Appendix 12 %2D Decommissioning Environmental Technical Report Part 04 of 14 %2D A4E7E3": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "1402138_TCPL_SLL_ESA_APPENDIX_B_Part2_FINAL %2D A4J6E4": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "A0E6G9 %2D Volume 4 Env. Impact Assess. Part 3": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "A1X9F2 %2D ESA Appendix 1": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A1K4K9 %2D APPENDIX 7 %2D ESA Part 2": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A3H4X0 %2D Attachment 8A %2D ESA %2D Appendix D Part 9 of 10": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A98624%2D12 11 EDML_ESA_PART_C %2D A6T2G4": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A1R5X0 %2D Appendix 4 %E2%80%93 ESA A2 Wetland Assessment": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B%2D02%2D28 %2D NGTL Horn River Project %2D ESA Appendix 5 AIA Part 1 of 3 %2D A1R8F5 ": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A0W5X9 %2D ESA Appendix A": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A0K3W7 %2D EIA re Ponder Park Cutouts May 7 04": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D11h %2D Alignment Sheet %2D Alberta 21 (A0Y0R8)": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A73897%2D11 11 Vaughan Mainline Expansion Project %2D ESA_Sec 5_1 to 5_7 (2 of 9) %2D A4V3Q4": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A0W9D9 %2D Environmental Assessment": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A98641%2D14 NCE_ESA_Appendix1A_1B %2D A6T2V9": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B35%2D46 %2D ESA_Update_September_30th_App_B_Part_23 %2D A2D7U3 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A87033%2D17 ESA_Main_Part3_of_3 %2D A5V8E7": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "B2%2D11 %2D Vantage Pipeline Project Vol II ESA Sections 8 and 9 %2D A1X5X6": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B1%2D19 %2D V3A_APPB_03_OF_03_PH_3_ESA_WORKSHOP %2D A3S0S5": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "B%2D7%2Dn %2D %2D A0T3J3 %2D ESA%2DEA Heritage Resources Rpt Appendix A %2D Env Res Map 1%2D20k 013": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "Attachment 08_12_ESA_FINAL_Appendices07_08 %2D A3W5R6": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A%2D16B %2D Letter to all Parties and Scope of the Environmental Assessment for Proposed Line 4 Extension Project A1A9E4 ": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A1J5A0 %2D ESA Appendix D %2D AIA 5 of 8": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1U7C9 %2D 37 %2D ESA_REV1_Aug_2010_Part_16_of_23": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D3d %2D Alignment Sheet %2D Alberta 04  %2D  A0X2R1": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B2%2D8 %2D ESA Section 5 Baseline Part 5 %2D A1X1V2": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "B%2D7%2Dc %2D %2D A0T3I2 %2D ESA%2DEA Heritage Resources Rpt Appendix A %2D Env Res Map 1%2D20k 02": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A90753%2D2 Acadia East Receipt MS Phase 1 ESA %2D Final %2D A6C4V3": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D2A Volume II %2D ESA %2D Section 1 %2D Executive Summary and Introduction (A0Z0Y6)": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A0F8Y2 %2D Environmental Assessment": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A79036%2D9 09 Peace River Mainline Abandonment %2D Appendix 9 %2D ESA Attachment B ESIS 5 of 11 %2D A5E6A0": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D02%2D20 %2D NGTL Horn River Project %2D ESA Appendix 3 Rare Plant Part 1 of 5 %2D A1R8E7 ": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B2%2D09_ESA_Main_Sec_1_to_5_Part9of12 %2D A4K2R4": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D01V %2D Volume 4 %2D Environmental Assessment Report %2D Environmental Management A0W9J0": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D3ii %2D Alignment Sheet %2D Alberta 35  %2D A0X2U2": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B2%2D7%2D Volume II %2D ESA %2D Appendix 1A  %2D Pipeline Environmental Protection Plan %2D Pt 1 of 2 %2D A3E2Y2 ": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "App C Environmental and Socio Economic Assessment %2D A4G7L8": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A1X5H1 %2D ESA Appendix 3": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A87033%2D25 ESA_App_B%2D3_Aitken_GHG_Tech %2D A5V8F5": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B%2D7%2Ds %2D %2D A0T3J8 %2D ESA%2DEA Heritage Resources Rpt Appendix A %2D Env Res Map 1%2D20k 018": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D4q %2D Alignment Sheet %2D Manitoba 17  %2D A0X2Q4": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B2%2D3  %2D ESA Section 1%2D4 Part 2 %2D A1X1U7": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A96233%2D11 Attachment NEB 3.1%2D3 McLeod_ESA_Part 8 %2D A6L2D0": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D36b  Further Updates to ESA %2D Oct 2007 re Southern Lights %2D A1A8L5  ": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A0S5J3 %2D ESA %2D Appendix A9.3 Pre%2DImpact Assessment %2D Part 2": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A3E0R8 %2D Line 2 Replacement ESA %2D 10 of 21": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A94156%2D10 2021 NGTL SXP %2D ESA Update %2D Appendix H %2D Historical Resources %2D A6H7S4": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D4s %2D Alignment Sheet %2D Manitoba 19  %2D A0X2Q6": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D4%2Dc %2D %2D A0T2J9 %2D ESA%2DEA Geotechnical Rpts Appendix A %2D Map ERM TERRAIN 1%2D20k 00 Legend 1": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D1d  %2D Groundbirch ESA_NEB_1of14 (A1J6I3)": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A73674%2D19 Section_5%2DESA%2DAppB%2DSoil%2D3of7 %2D A4V0R0": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "B1%2D41 Appendix 10%2D2_TCPL_KNC_ESA_Appendix E %2D 6 %2D A4A2Q2": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A74787%2D3 V2 %2D ESA_Amendment_Appendix_B %2D A4W7Y3": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B3%2D4 %2D Appendix C Soil_Vegetation and Wetlands Baseline Figures C6%2D12 Part 2 %2D A1X1X1": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B36%2D21 %2D ESA_Update_September_30th_App_C_Part_10 %2D A2D7X9 ": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A3H4W0 %2D Attachment 8A %2D ESA %2D Appendix B Part 2 of 2": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1D2W6 %2D ESA for Red Deer River Re%2Droute %2D Part 3 of 3": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A74787%2D5 V2 %2D ESA_Amendment_Appendix_D_Part1 %2D A4W7Y5": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A2A0E1 %2D Harvest Gething ESA Appendix 1": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D2d %2D KXL ESA %2D Section 9 %2D A1I9U3": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D2g Vol II %2D ESA %2D Section 5 (Part 3) %2D ESE Setting A0Y1U3": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A3H4X4 %2D Attachment 8A %2D ESA %2D Appendix G Part 2 of 7": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "15 ESA Appendix04 %2D A4F3A6": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A74792%2D4 V3 %2D ESA_Amendment_Appendix_C_Part4 %2D A4W8J7": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "B%2D2e %2D Redwillow ESA Section 4 %2D A1C3V9 ": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A2Q2X8 %2D Appendix 6 %2D ESA %2D Appendix A thru D": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A0W0J8 %2D Environmental Protection Plan": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D3L %2D Alignment Sheet %2D Alberta 12  %2D A0X2R9": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A1J4Y9 %2D ESA Appendix B Rare Plant Study 2 of 2": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A3F8C8 %2D ESA Appendicies Part 8 of 10": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A2T8E3 %2D ESA Addendum %2D Field Study": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A0S1T6 %2D Canadian Environmental Assessment": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "ExternalPaperOnly_e (16)": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B3%2D15 %2D Vol 6B %2D Marine Terminal ESA (Part 4 of 4) %2D A1T0G5 ": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "B%2D3a %2D Alignment Sheet %2D Alberta 01  %2D A0X2Q8 ": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A0S5I9 %2D ESA %2D Figure 9.4(e) Changes in Land Use 2004": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D02%2D17 %2D NGTL Horn River Project %2D ESA Appendix 2 Wetland Report Part 2 of 4 %2D A1R8E4 ": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A90753%2D15 Last Lake Receipt MS Phase 1 ESA %2D Final %2D A6C4W6": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D02%2D39 %2D NGTL Horn River Project %2D ESA Appendix 6 TLU Report Part 9 of 11 %2D A1R8G6 ": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B2%2D4 %2D ESA Section 5 Baseline Part 1 %2D A1X1U7": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B18%2D15 %2D Supplemental ESA %2D Appendix 4g %2D Wetlands Evaluation %2D A3L5C0": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B%2D1i  %2D ESA Appendix A Soils Desktop Study  (A1D5R9)": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A1C0S9 %2D 14 Vol II ESA Attachment B": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D7%2Dx %2D %2D A0T3K3 %2D ESA%2DEA Heritage Resources Rpt Appendix A %2D Env Res Map 1%2D20k 23": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B3%2D29 %2D Appendix N Detailed Acoustic Evaluation for Bakken Pump Station_Methods and Results %2D A1X1Z6": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "A1U7A2 %2D 22 %2D ESA_REV1_Aug_2010_Part_1_of_23": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A1X7R4 %2D ESA %2D Appendix 6 %2D Wildlife Part 2 of 2": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B2%2D17 %2D ESA Section 6 Effects %2D A1X1W1": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "A1U7D3 %2D 41 %2D ESA_REV1_Aug_2010_Part_20_of_23": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A1S7W5 %2D ESA Appendix 2": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A81524%2D32 ESA%2D Appendix B%2D Alignment Sheets %2D A5I4X6": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A2H7D3 %2D Section 9  %2D ESA_Appendix 3_Environmental Protection Plan_Sections_1%2D11": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B3%2D28 %2D Vol 8B %2D Marine Transportation ESA (Part 3 of 11) %2D A1T0H8 ": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "Attachment %2D ESA %2D 9 of 11 %2D A3V4G5": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A2T3H5 %2D Section 9 %2D Appendix 9%2D1 ESA (Part 5 of 5)": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A63951%2D36 V5 %2D ESA_Appendix C_EASheets %2D A4D9L4": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "B%2D4%2Dz %2D %2D A0T2Q2 %2D ESA%2DEA Geotechnical Rpts Appendix A Maps ERM TERRAIN 1%2D20k 20 ": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1W1T7 %2D Apache to NEB Pipeline_Abandonment_ESEA_15Nov15": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A0X4E5 %2D Environmental Assessment": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A72401%2D16 V4 04 ESA Appendix B%2DEAS Sheets 10%2D16%2DPart 3 of 6 %2D A4T0Z6": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "16 ESA Appendix05_Part1of2 %2D A4F3A7": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D2d %2D Redwillow ESA Section 3 Part 2 %2D A1C3V8": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A0X4F3 %2D Environmental Assessment": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B18%2D4 %2D Supplemental ESA %2D Appendix 1 %2D Aquatic Assessment %2D A3L4Z9": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B5%2D19 %2D Appendix 06 %2D ESA Appendix 2 %2D Environmental Alignment Sheet Package Part 05 of 18 %2D A4E6X9": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D16c %2D ESA %2D Section 5 %2D Pages 098%2D102  (A0Y0X1) ": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B35%2D30 %2D ESA_Update_September_30th_App_B_Part_7 %2D A2D7S7 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "Section_5%2DESA%2DAppB%2DWildlife%2D1of2 %2D A4U3X4": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A0Z6R0 %2D 2 Gas Station %2D Ph I ESA": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D1%2Dx %2D ESA %2D Environmental Policy %2D Volume II %2D Appendix II to ESA %2D ACCE Application A0X6A0  ": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D5G Appendix 1%2D5 %2D Update and Errata to ESA (A0Z9U2)": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D4%2Dx %2D %2D A0T2Q0 %2D ESA%2DEA Geotechnical Rpts Appendix A Maps ERM TERRAIN 1%2D20k 018 ": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D01DD %2D Volume 4 %2D Envrionmental Assessment Report %2D Acronyms A0W9J8": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D8%2Dd %2D %2D A0T3L4 %2D ESA%2DEA Wetlands Report Part 4": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A3H4Y0 %2D Attachment 8A %2D ESA %2D Appendix H": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D02%2D38 %2D NGTL Horn River Project %2D ESA Appendix 6 TLU Report Part 8 of 11 %2D A1R8G5 ": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1X9F7 %2D ESA Appendix 6": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B1%2D28 %2D 19_1313340047_TCPL_CCP_ESA_FINAL_AppD_Part9 %2D A3V4Q6": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B2%2D15 %2D Vantage Pipeline Project Vol II ESA Sections 11 to 13 %2D A1X5Y0": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B2%2D13_ESA_Main_Sec_6_Part1of1 %2D A4K2R8": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A63951%2D4 V4 %2D ESA_Appendix B2_CS 136 Cobourg %2D A4D9H9": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B5%2D12 %2D Appendix 06 %2D ESA Appendix 1A %2D Pipeline Environmental Protection Plan Part 2 of 3 %2D A4E6X2": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A1W4K5 %2D ESA Appendix D SLP Vegetation": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D2i Vol II %2D ESA %2D Section 5 (Part 5) %2D ESE Setting A0Y1U5": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A3F6W8 %2D Line 3 Replacement Project ESA %2D Part 11 of 16": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B35%2D42 %2D ESA_Update_September_30th_App_B_Part_19 %2D A2D7T9 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A73674%2D6 Section_5%2DESA%2D1of2 %2D A4V0L7": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "B3%2D2 %2D Appendix B Product Releases within 1 km of Bakken Pipeline Saskatchewan %2D A1X1W9": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B35%2D27 %2D ESA_Update_September_30th_App_B_Part_4 %2D A2D7S4 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D2c %2D Redwillow ESA Section 3 Part 1 %2D A1C3V7": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D4o %2D Alignment Sheet %2D Manitoba 15  %2D A0X2Q2": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B18%2D19 %2D Supplemental ESA %2D Appendix 7 %2D Environmental Protection Plan %2D A3L5C4": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A3E0S4 %2D Line 2 Replacement ESA %2D 16 of 21": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B%2D2qq %2D KXL ESA %2D Appendix A Part 11 of 14 %2DA1I9Y2 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D1%2Dgg %2D ESA %2D EPP 47 pages %2D Volume II %2D Part 1 %2D Appendix XI to ESA %2D ACCE Application %2D A0X6A9 ": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A98624%2D21 20 EDML_ESA_Appendix_G_Aquatic_Resources_Part B %2D A6T2H3": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D01Q %2D Volume 3 %2D Benefits Plan A0W9I5": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A92885%2D1 SLE Boundary Lake NEB Letter and Phase I ESA_Final %2D A6F8H6": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D01II %2D Volume 4 %2D Environmental Assessment Report %2D Appendix E1 A0W9K3": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "A79036%2D10 10 Peace River Mainline Abandonment %2D Appendix 9 %2D ESA Attachment B ESIS 6 of 11 %2D A5E6A1": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D11e %2D Alignment Sheet %2D Alberta 17 (A0Y0R5)": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B5%2D24 %2D Appendix 06 %2D ESA Appendix 2 %2D Environmental Alignment Sheet Package Part 10 of 18 %2D A4E6Y4": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D9%2Dk %2D %2D A0T3T3 %2D ESA%2DEA Tech Rpts Wildlife and Wildlife Habitat Appendix A Env Res Maps 1%2D20k 04": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D3mm %2D Alignment Sheet %2D Alberta 39  %2D A0X2U6": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "Attachment %2D ESA %2D 5 of 11 %2D A3V4G1": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A0X4F0 %2D Environmental Assessment": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A86245%2D2 Attachment 1 %2D Update to ESA Memo %2D A5U4E4": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D4%2Dq %2D %2D A0T2L3 %2D ESA%2DEA Geotechnical Rpts Appendix A Maps ERM TERRAIN 1%2D20k 11 ": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A2K5C9 %2D ESA Mica Creek Pipeline Project Appendix 7": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D4h %2D Alignment Sheet %2D Manitoba 08  %2D A0X2L5": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D2u %2D Socio%2DEconomics %2D Part 1  A0X2K0 ": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B%2D01KK %2D Volume 4 %2D Environmental Assessment Report %2D Appendix F A0W9K5": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B%2D6%2Dg %2D %2D A0T3F8 %2D ESA%2DEA Tech Reports %2D Vegetation Env Res Maps 1%2D20k 04": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "18384%2D520 AB PH1%2D1 2015%2D03%2D05 final_email %2D A4U3H2": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D5%2Di %2D %2D A0T3D0 %2D ESA%2DEA Tech Rpts Soils Appendix G Env Res Maps ERM SOILS 1%2D20k 04": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A98624%2D17 16 EDML_ESA_Appendix D_Post_Construction_Monitoring %2D A6T2G9": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A2K5C3 %2D ESA Mica Creek Pipeline Project NEB Interactions Table": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D2o Vol II %2D ESA %2D Section 9 %2D Supplemental Studies A0Y1V1": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A0W5F9 %2D ESA Appendix B%2D Typical Construction Drawings": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "A2U8L5 %2D Laurier Reroute Update": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A81160%2D15 7178_eiccf3_am_035_mndetails_151111 %2D A5H8K3": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B%2D3LL %2D Alignment Sheet %2D Alberta 38  %2D A0X2U5": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D4%2Ddd %2D %2D A0T2Q6 %2D ESA%2DEA Geotechnical Rpts Appendix A Maps ERM TERRAIN 1%2D20k 24 ": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D5%2Df %2D %2D A0T3C7 %2D ESA%2DEA Tech Rpts Soils Appendix G Env Res Maps ERM SOILS 1%2D20k 01": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A2I0K6 %2D ESA Appendix 1 EPP Main and Appendices A to E (Sections 6 and 7)": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D11q %2D Alignment Sheet %2D Alberta 31 (A0Y0S7) ": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D1AH %2D ESA %2D NWML_KomieExt_13_of_17  %2D A2F4Q1": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A72401%2D15 V4 03 ESA Appendix B%2DEAS Sheets 5%2D9%2DPart 2 of 6 %2D A4T0Z5": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D13B %2D Further Updates to the ESA Dec 2007 re Line 4 A1C6Y1": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A1G2U3 %2D 2008 Alberta Heritage Resources Overview %2D Alberta Clipper": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A82017%2D2 Husky Marsden Pipeline PH2 ESA SOW 07%2DMar%2D2017 %2D A5J3V5": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B35%2D49 %2D ESA_Update_September_30th_App_B_Part_26 %2D A2D7U6 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A87033%2D16 ESA_Main_Part2_of_3 %2D A5V8E6": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "A92114%2D2 Attachment ESA Addendum Update %2D EPP %2D Revised %2D A6E6Z8": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "21 ESA Appendix08 %2D A4F3C2": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A0Y1W9 %2D Terasen_Part II ESA Appendices for Blue River Pump Station": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D5%2Dv %2D %2D A0T3E3 %2D ESA%2DEA Tech Rpts Soils Appendix G Env Res Maps SOILS 1%2D20k 017": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B35%2D20 %2D ESA_Update_September_30th_Wildlife_Section_9(e) %2D A2D7R7 ": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A87033%2D10 ESA_App_G%2D2_Chetwynd Loop%2DWildlife_Tech %2D A5V8E0": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D1AM  %2D ESA %2D NWML_KomieExt_20B_Alignment_Sheets_1_of_2  %2D A2F4Q6": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A74994%2D3 Order no. XG%2DR040%2D10%2D2003 %2D A4X3G8": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A1A0E8 %2D Appendix 5 Figure 4.2%2D1": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B%2D8%2Dg %2D %2D A0T3L7 %2D ESA%2DEA Wetlands Rpts Appendix G %2D Wetland Fish Habitat Env Res Map 1%2D20k Legend": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D02%2D27 %2D NGTL Horn River Project %2D ESA Appendix 4 Wildlife Report Part 3 of 3 %2D A1R8F4 ": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A74994%2D1 Order no. XG%2D12%2D90 %2D A4X3G6": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D01HH %2D Volume 4 %2D Environmental Assessment Report %2D Appendix D A0W9K2": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "B2%2D6 %2D ESA Section 5 Baseline Part 3 %2D A1X1V0": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D11n A0Y0S4 %2D Alignment Sheet %2D Alberta 28 (A0Y0S4 )": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D6%2Da %2D %2D  A0T3F2 %2D ESA%2DEA Vegetation Report": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B2%2D19  ESA_Appendix_G_Part4of4 (A3Q6H5)": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A73674%2D24 Section_5%2DESA%2DAppB%2DVegetation%2D1of2 %2D A4V0R6": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "B3%2D03 %2D Appendix 06 %2D ESA Appendix 9 %2D Vegetation Technical Report Part 3 of 5 %2D A4E7D3": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D34b %2D Mount Not Proposed Reroute ESA map  A1H5T1": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A98624%2D24 23 EDML_ESA_Appendix_I_TK_TDR %2D A6T2H6": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D8%2D l %2D %2D A0T3Q2 %2D ESA%2DEA Wetlands Rpts Appendix G %2D Wetland Fish Habitat Env Res Map 1%2D20k 05": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B290%2D21 %2D Part_1_Westridge_Delivery_Line%2DAppK%2DDefinitions_of_Significance_Criteria_in_ESA %2D A4F5F4": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "Attachment 08_11_ESA_FINAL_Appendix06 %2D A3W5R5": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A1R8U9 %2D Place holder for ESA": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "ExternalPaperOnly_e (1)": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A2I0K4 %2D ESA Main Section 1 to 6.2.5": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D1AE %2D  ESA %2D NWML_KomieExt_10_of_17  %2D A2F4L8": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B%2D01MM %2D Volume 4 %2D Environmental Assessment Report %2D Appendix H A0W9L1": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A3E0R5 %2D Line 2 Replacement ESA %2D 7 of 21": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B1%2D43 Appendix 10%2D2_TCPL_KNC_ESA_Appendix F and G %2D A4A2Q4": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A1G0H9 %2D ESA Appendix E (Environmental Protection Plan)": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B8%2D32 %2D North_Montney_ESA_Appendix_L_REVISED %2D A3V1V9": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A1A9H4 %2D Appendix 7": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "A74788%2D12 V2 %2D ESA_Amendment_Appendix_D_Part29 %2D A4W8C4": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A1Y7Y5 %2D ESA Report Appendix A Photo Log": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D01CC %2D Volume 4 %2D Environmenal Assessment Report %2D References A0W9J7": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "B8%2D23 %2D North_Montney_ESA_Sec 11 REVISED %2D A3V1V0": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "A3I8H6 %2D Attachment 09A %2D ESA_Section1%2D4": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A3F6W7 %2D Line 3 Replacement Project ESA %2D Part 10 of 16": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A3E0S6 %2D Line 2 Replacement ESA %2D 18 of 21": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A1R5X7 %2D Appendix 4 %E2%80%93 ESA A7 Environmental Alignment Sheets": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D2cc %2D KXL ESA %2D Section 17 Part 1 of 3 %2D A1I9W8 ": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A80172%2D11 Section 4 %2D ESA %2D AppB2 %2D Soils 1of2 %2D A5G2X5": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "A1D3I7 %2D Archaeological Impact Assessment %2D Permit 2002%2D202": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D2a  %2D KXL ESA %2D Executive Summary and Table of Contents %2D A1I9U0": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B%2D6%2Dx %2D %2D A0T3H5 %2D ESA%2DEA Tech Reports %2D Vegetation Env Res Maps 1%2D20k 21": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A90753%2D13 Hines Creek West Receipt MS Phase 1 ESA %2D Final %2D A6C4W4": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D2F Volume II %2D ESA %2D Section 5 %2D ESE Setting (Part2) (A0Z0Z1)": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A0R3W8 %2D SEACOR App C Phase I ESA %2D Finn Site Location Plan": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "B2%2D10_ESA_Main_Sec_1_to_5_Part10of12 %2D A4K2R5": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A0W5Y0 %2D ESA Appendix B": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B3%2D4 %2D Vol 6A P1 %2D Pipelines and Tank Terminal ESA (Part 4 of 5) %2D A1T0F4 ": {
    "topic": 12,
    "keywords": "marine, volume, effect, environmental, terminal, water, sec, british_columbia, habitat, assessment"
  },
  "A72401%2D30 V4 18 ESA Appendix F%2DPart 4 of 5 %2D A4T1C0": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A0L3A5 %2D Environmental Assessment": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "ExternalPaperOnly_e (10)": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A90753%2D3 Acadia North Receipt MS Phase 1 ESA %2D Final %2D A6C4V4": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "B%2D3%2De %2D %2D A0T2G2 %2D ESA%2DEA Env Site Assessments Report 5": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A1W6X2 %2D ESA Appendix 2 (1 of 3)": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A0W5Y3 %2D ESA Appendices F and G": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D3%2Dp %2D %2D A0T2H3 %2D ESA%2DEA Fish Atlas Proposed 4 of 4": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D1AD  %2D ESA %2D NWML_KomieExt_09_of_17  %2D A2F4L7": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A90456%2D2 Environmental Assessment Letter For Leaving Rig Matting In Situ versus R... %2D A6A9K3": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A1X7R5 %2D ESA %2D Appendix 7 %2D Environmental Protection Plan": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A3F0G1 %2D Attachment 7a%2DESA Part 1 of 2": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "B%2D3x %2D Alignment Sheet %2D Alberta 24  %2D A0X2T1": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "B%2D02%2D29 %2D NGTL Horn River Project %2D ESA Appendix 5 AIA Part 2 of 3 %2D A1R8F6 ": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A90976%2D7 Attachment 5 %2D ESA %2D A6C8X5": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B1%2D34 %2D 25_1313340047_TCPL_CCP_ESA_FINAL_AppE_Part2 %2D A3V4R2": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A2I0L3 %2D ESA Appendix 6 Wildlife Sections 1 to 3.5": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A1A0G1 %2D Appendix 5 Figure 4.3%2D16": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B%2D02%2D42 %2D NGTL Horn River Project %2D ESA Appendix 7 Cabin Socio %2D A1R8G9 ": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A98624%2D16 15 EDML_ESA_Appendix C_Decommissioning_and_Abondonment %2D A6T2G8": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B2%2D24_ESA_Appendix_1G_Otter_EPP_Part1of1 %2D A4K2S9": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D4d %2D Alignment Sheet %2D Manitoba 04  %2D A0X2L1 ": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A0R8Y0 %2D Stittsville ESA %2D Appendix C (Photographs) %2D Part 2": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A0W4R8 %2D Environmental Assessment": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B2%2D3 %2D ESA update %2D Provident %2D A1V7E6 ": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "07_ESA_FINAL_Appendix03_pt1of2 %2D A4C2U5": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B36%2D13 %2D ESA_Update_September_30th_App_C_Part_2. %2D A2D7X1 ": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B1%2D37 %2D 28_1313340047_TCPL_CCP_ESA_FINAL_AppF%2DH %2D A3V4R5": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A0R8Y1 %2D Stittsville ESA %2D Appendix C (Photographs) %2D Part 3": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "B%2D11x %2D Alignment Sheet %2D Manitoba 05  (A0Y0T4 )": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A87554%2D1 Condition 5_Phase I ESA_Investigation and Remediation Plan Commitment %2D A5W6J2": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A87481%2D6 Hotchkiss East Phase 1 ESA Final %2D A5W5C8": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A0W5X8 %2D ESA Sections 5 %2D 9": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D2y %2D Follow%2Dup  A0X2K4": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A0L5T3 %2D ESA Part 5C": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A72401%2D29 V4 17 ESA Appendix F%2DPart 3 of 5 %2D A4T1A9": {
    "topic": 14,
    "keywords": "date, report, information, land, transcanada, well, type, page, energy, ltd"
  },
  "A2V2H5 %2D Attachment 1_Final Report of Phase 2 ESA by Stantec": {
    "topic": 9,
    "keywords": "soil, low, topsoil, unit, material, subsoil, surface, water, slope, texture"
  },
  "14 ESA Appendix03_Part4of4 %2D A4F3A5": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A74787%2D20 V2 %2D ESA_Amendment_Appendix_D_Part16 %2D A4W8A0": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A1J4Y8 %2D ESA Appendix B %2D Rare Plant Study 1 of 2": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "12_ESA_FINAL_Appendix07_pt1of2 %2D A4C2V0": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D14f %2D Supplemental ESA 3 of 17 A1G4L8": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A74788%2D6 V2 %2D ESA_Amendment_Appendix_D_Part23 %2D A4W8A8": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "B2%2D6 %2D Volume II %2D ESA %2D Section 7 %2D 11 %2D A3E2Y1": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B1%2D24 %2D 15_1313340047_TCPL_CCP_ESA_FINAL_AppD_Part5 %2D A3V4Q2": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A72401%2D28 V4 16 ESA Appendix F%2DPart 2 of 5 %2D A4T1A8": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D02%2D24 %2D NGTL Horn River Project %2D ESA Appendix 3 Rare Plant Part 5 of 5 %2D A1R8F1 ": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "1402138_TCPL_SLL_ESA_SECTION_1%2D4_FINAL %2D A4J6E9": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "B3%2D20 %2D Appendix F Descriptions of Watercourse Crossing Locations %2D A1X1Y7": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B2%2D30 %2D Volume IIA %2D ESA %2D Appendix 7 %2D Wetland Evalution %2D App a %2D Health Function Site Cards Pt 4 %2D A3E3A5": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A73897%2D18 18 Vaughan Mainline Expansion Project %2D ESA_AppE Part 2 (9 of 9) %2D A4V3R1": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B%2D6%2Dj %2D %2D A0T3G1 %2D ESA%2DEA Tech Reports %2D Vegetation Env Res Maps 1%2D20k 07": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D4%2Dbb %2D %2D A0T2Q4 %2D ESA%2DEA Geotechnical Rpts Appendix A Maps ERM TERRAIN 1%2D20k 22 ": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B35%2D21 %2D ESA Update September 30th Socio Ec, Archaeology and Palaeontology Sections 10%2D12 %2D A2D7R8 ": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "14_ESA_FINAL_Appendix08 %2D A4C2V2": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B6%2D22 %2D Appendix 06 %2D ESA Appendix 8 %2D Wetland Technical Report Part 3 of 7 %2D A4E7C5": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "B%2D7%2Dg %2D %2D A0T3I6 %2D ESA%2DEA Heritage Resources Rpt Appendix A %2D Env Res Map 1%2D20k 06": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B3%2D10 %2D Vol 6A P2 %2D Pipelines and Tank Terminal ESA (Part 5 of 6) %2D A1T0G0 ": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "B3%2D45_ESA_Appendix_8B_McLeodRiver_Vegetation_TDR_Part1of1 %2D A4K2V8": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B%2D1AB  %2D ESA %2D NWML_KomieExt_07_of_17  %2D A2F4L5": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B6%2D25 %2D Appendix 06 %2D ESA Appendix 8 %2D Wetland Technical Report Part 6 of 7 %2D A4E7C8": {
    "topic": 16,
    "keywords": "wetland, water, class, specie, vegetation, function, soil, marsh, iii, cover"
  },
  "A74508%2D4 Appendix 6.1 %2D ESA Part 2 of 10 %2D A4W2R6": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B%2D3f %2D Alignment Sheet %2D Alberta 06  %2D A0X2R3 ": {
    "topic": 10,
    "keywords": "enbridge, saskatchewan, replacement, line, manitoba, route, keystone, prairie, appendix, survey"
  },
  "A79036%2D11 11 Peace River Mainline Abandonment %2D Appendix 9 %2D ESA Attachment B ESIS 7 of 11 %2D A5E6A2": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "A1W6Y2 %2D ESA Appendix 7": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "A1A5D4 %2D Environment Canada is not RA under CEAA": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B1%2D20%2D ESA Appendix A Part 2 of 2 %2D A2A6Q6 ": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "B%2D5%2Dc %2D %2D A0T3C4 %2D ESA%2DEA Soils Rpts Appendix G %2D ER Map Soils 1%2D20k 00 Index Rev0": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B%2D3%2Du %2D %2D A0T2H8 %2D ESA%2DEA Greenhouse Gas Tech Report": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "Joint Public Review Panel Report GH%2D6%2D96": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D1%2Daa %2D ESA %2D Heritage supporting documents %2D Volume II %2D Appendix V to ESA %2D ACCE Application %2D A0X6A3   ": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A0S1W5 %2D Supplemental Work ESA Table 2, page 5 replacement": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "B1%2D23 %2D Appendix 10 ESA %2D Appendices D to I %2D A1T0Z0": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A74508%2D10 Appendix 6.1 %2D ESA Part 8 of 10 %2D A4W2U5": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A78970%2D2 Supplemental ESA %2D Part 1 of 3 %2D A5E4Z2": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "A87033%2D19 ESA_App_B%2D1_AQ_Tech_CS2_Part2_of_5 %2D A5V8E9": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B%2D2aa %2D Environmental Protection Plan Report  A0X2K6": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A1J5A3 %2D ESA Appendix D %2D AIA 8 of 8": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "B%2D2r %2D Fisheries Appendix 2   A0X2J7 ": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A63951%2D31 V4 %2D ESA_Appendix J%2D1_Municipal Land Use %2D A4D9K6": {
    "topic": 7,
    "keywords": "station, service, canada, economic, access, land, local, community, park, town"
  },
  "A0F0F1 %2D Environmental Assessment": {
    "topic": 6,
    "keywords": "environmental, assessment, effect, economic, socio, potential, environment, act, mitigation, resource"
  },
  "B%2D1f  %2D Groundbirch ESA_NEB_3of14 (A1J6I5)": {
    "topic": 2,
    "keywords": "effect, residual, potential, cumulative, term, operation, high, environmental, assessment, low"
  },
  "B1%2D19 %2D ESA Appendix A Part 1 of 2 %2D A2A6Q5 ": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A1K4L1 %2D APPENDIX 7 %2D ESA Part 4": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  },
  "B%2D4%2Dj %2D %2D A0T2K6 %2D ESA%2DEA Geotechnical Rpts Appendix A Maps ERM TERRAIN 1%2D20k 04": {
    "topic": 15,
    "keywords": "soil, class, wetland, note, trench, slope, datum, environmental, boundary, land"
  },
  "B8%2D33 %2D North_Montney_ESA_Appendix_N_REVISED %2D A3V1W0": {
    "topic": 11,
    "keywords": "fish, habitat, water, open, cut, isolate, crossing, dfo, measure, watercourse"
  },
  "Attachment 08_08_ESA_FINAL_Appendix03_Pt02 %2D A3W5R2": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A0R8Y3 %2D Stittsville ESA %2D Appendices D to F (Soils%2DFish%2DBirds)": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "B%2D14w %2D Mt Not ESA 3of 6 A1G4R5": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A0T6S9 %2D Environmental Assessment": {
    "topic": 1,
    "keywords": "environmental, plan, measure, soil, material, protection, water, topsoil, inspector, appropriate"
  },
  "A1X9F5 %2D ESA Appendix 4": {
    "topic": 4,
    "keywords": "specie, wildlife, plant, habitat, forest, survey, rare, vegetation, route, alberta"
  },
  "B1%2D25 %2D ESA Appendix F through Appendix J %2D A2A6R1": {
    "topic": 5,
    "keywords": "gas, ngtl, river, nova, transmission, lake, resource, community, traditional, route"
  },
  "A74787%2D1 V2 %2D ESA_Amendment_Sections_1%2D10 %2D A4W7Y0": {
    "topic": 3,
    "keywords": "effect, habitat, potential, residual, wildlife, mitigation, assessment, specie, report, resource"
  },
  "B3%2D2 %2D Vol 6A P1 %2D Pipelines and Tank Terminal ESA (Part 2 of 5) %2D A1T0F2": {
    "topic": 18,
    "keywords": "noise, level, sound, station, source, acoustic, model, line, dba, unit"
  },
  "A72401%2D33 V4 21 ESA Appendix G%2DPart 2 of 4 %2D A4T1C3": {
    "topic": 8,
    "keywords": "fish, habitat, cross, river, bank, water, creek, channel, watercourse, location"
  },
  "A69343%2D6 V1_Sec_02_Errata_App_2%2D2_ESA_Replacement_Pages %2D A4K2J6": {
    "topic": 19,
    "keywords": "mlv, mainline, eastern, ontario, golder, field, amendment, heritage, road, study"
  },
  "A0R3Z9 %2D Sec 6 ESA NEB Final ColourTitlepages": {
    "topic": 17,
    "keywords": "north, british_columbia, creek, westcoast, peace, loop, montney, dawson, datum, groundbirch"
  },
  "A87033%2D20 ESA_App_B%2D1_AQ_Tech_CS2_Part3_of_5 %2D A5V8F0": {
    "topic": 13,
    "keywords": "emission, air, compressor, concentration, quality, hour, station, level, average, datum"
  }
}