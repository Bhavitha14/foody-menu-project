import openpyxl
path = "C:\\Users\\bhavi\Desktop\\test.xlsx"
workbook = openpyxl.load_workbook(path)
sheet = workbook.active
for r in range(1, 6):
    for c in range(1, 4 + 1):
        sheet.cell(row=r, column=c).value = "hi,Welcome"
workbook.save(path)