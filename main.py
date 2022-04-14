def on_button_pressed_ab():
    def on_forever():
        soucet=0
        if soucet==0:
            first.show_image(0)
        basic.pause(3000)
        for i in range(3):
         soucet+=1
         if soucet==1:
                second.show_image(0)
         if soucet==2:
             third.show_image(0)
         if soucet==3:
             fouth.show_image(0)
         basic.pause(3000)
    forever(on_forever)
input.on_button_pressed(Button.AB, on_button_pressed_ab)


first = images.create_image("""
. # . . .
# . . . .
. . . . .
. . . . .
. . . . .
""")
second = images.create_image("""
. . . . .
. . # . .
. # . . .
. . . . .
. . . . .
""")
third = images.create_image("""
. . . . .
. . . . .
. . . # .
. . # . .
. . . . .
""")
fouth = images.create_image("""
. . . . .
. . . . .
. . . . .
. . . . #
. . . # .
""")
first.show_image(0)
